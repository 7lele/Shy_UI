function Sidebar(){
    return(
        <aside
            className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block flex-1">
            <div className="no-scrollbar h-full overflow-auto py-6 px-4 lg:py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1"><h4
                        className="rounded-md px-2 py-1 text-center text-lg font-medium">Getting Started</h4>
                        <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                            <a href="/docs/introduction/" className="flex items-center justify-start gap-2 rounded-md px-2 py-1 hover:bg-muted"><span>Introduction</span></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1"><h4
                        className="rounded-md px-2 py-1 text-center text-lg font-medium">Components</h4>
                        <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                            <a href="/docs/accordion/" className="flex items-center justify-start gap-2 rounded-md px-2 py-1 hover:bg-muted"><span>Accordion</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar