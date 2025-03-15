"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { useState } from 'react';
import { ChevronDown, Copy } from 'lucide-react';

function page(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);

    const toggleAccordion = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: "Item 1", content: "Content of the item 1" },
        { title: "Item 2", content: "Content of the item 2" },
        { title: "Item 3", content: "Content of the item 3" }
    ];

    const codeSnippet = `import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: "Item 1", content: "Content of the item 1" },
        { title: "Item 2", content: "Content of the item 2" },
        { title: "Item 3", content: "Content of the item 3" }
    ];
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return(
        <>
            <Header/>
            <div className="flex">
                <Sidebar/>
                <main className="relative z-0 flex-[6] overflow-y-auto">
                    <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-200">Accordion</h1>
                        <div className="mt-6 text-slate-300">
                            <h1 className="text-xl font-bold">Foldable Accordion</h1>
                            <div className="border bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:16px_16px] tab-content border-grid py-10 rounded-xl mt-4 w-full h-[580px] bg-slate-900 flex justify-center items-center">

                                <Tabs defaultValue="account" className="w-1/2">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="account">Preview</TabsTrigger>
                                        <TabsTrigger value="password">Code</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="account">
                                        <Card>
                                            <CardContent className="space-y-2">
                                                <div className="max-w-md mx-auto my-8 space-y-4">
                                                    {items.map((item, index) => (
                                                        <div key={index} className="border border-gray-900 rounded-2xl shadow-sm overflow-hidden">
                                                            <button
                                                                onClick={() => toggleAccordion(index)}
                                                                className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700"
                                                            >
                                                                <span className="font-medium">{item.title}</span>
                                                                <ChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                                            </button>
                                                            {openIndex === index && (
                                                                <div className="p-4 bg-gray-950 border-t border-gray-700">
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="password">
                                        <Card>
                                            <CardContent className="space-y-2">
                                            <pre className="bg-gray-800 text-slate-200 p-4 rounded-md overflow-x-auto">
                                                <code>{codeSnippet}</code>
                                            </pre>
                                                <Button onClick={handleCopy} className="mt-2 flex items-center">
                                                    <Copy className="mr-2" /> {copied ? 'Copied !' : 'Copy Code'}
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default page
