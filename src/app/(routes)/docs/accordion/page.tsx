import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function page(){
    return(
    <>
        <Header/>
        <div className="flex">
            <Sidebar/>
            <main className="relative z-0 flex-[6] overflow-y-auto">
                <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-200">Accordion</h1>
                    <div className="mt-6 text-slate-300">
                        <h1 className="text-xl font-bold">Welcome to Shy UI</h1>
                        <p className="mt-4 text-lg">
                            Shy UI is a comprehensive, production-ready Tailwind CSS component library designed to simplify your development workflow. By leveraging Shy UI, you can save valuable time, write less code, and focus on creating impactful user experiences.
                        </p>
                        <p className="mt-2">
                            As an open-source project, Shy UI is completely free to use, making it accessible to developers of all levels.
                        </p>
                        <p className="mt-2">
                            Crafted with care by <a href="https://github.com/7lele" className="underline">7lele</a>, this library offers a wide range of customizable components that seamlessly integrate into your projects.
                        </p>
                        <p className="mt-2">
                            Browse through various components, easily copy the code, and start building stunning interfaces with ease. Whether you're a seasoned developer or just starting out, Shy UI has you covered.
                        </p>
                    </div>
                </div>
            </main>
        </div>

    </>
    )
}

export default page