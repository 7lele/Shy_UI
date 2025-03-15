import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Header/>
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center  xl:pe-0 xl:ps-10 xl:text-start ">
        <div className={"border-t border-b border-grid py-10"}>


            <h1 className="font-extrabold text-center text-[clamp(1.5rem,3.5vw,4rem)] leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&amp;]:leading-[1.35]">
                <div className="font-semibold  [&amp;:first-line]:font-black">Light, Fast,
                    no install<br /><span className="font-normal">Tailwind CSS Components</span></div>
            </h1>

            <p className="text-base-content/70 font-title py-4 font-light [text-wrap:balance] md:text-lg xl:text-2xl">Shy UI is a production-ready Tailwind CSS component library <br />which saves time<br />to let
                    you write less code and focus on what matters.</p>

            <div className="flex w-full items-center justify-center pt-4">
                <div className="inline-flex flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:px-0">
                    <a  href="/docs/introduction/" className="bg-slate-700 p-3 md:btn-lg group max-w-86 grow rounded-full px-10 hover:bg-slate-600 transition-colors duration-300">Start using Shy UI</a></div>
            </div>
        </div>
    </div>

        </>
    );
}
