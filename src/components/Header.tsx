function Header(){
    return(
        <header
            className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur border-grid supports-[backdrop-filter]:bg-slate-900/60">
            <div className="container-wrapper">
                <div className="container flex h-14 items-center gap-4 md:gap-4">
                    <div className="mr-4 hidden md:flex"><a className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 340 340"
                             className=" ml-4">
                            <path fill="#D9D9D9"
                                  d="M340 170A169.997 169.997 0 0 0 235.056 12.94 169.998 169.998 0 0 0 12.941 235.057 169.999 169.999 0 0 0 170 340v-68A101.998 101.998 0 0 1 69.96 150.101 102 102 0 0 1 272 170h68Z"/>
                            <path fill="#D9D9D9"
                                  d="M283.34 169.67a113.663 113.663 0 0 1-33.293 80.377 113.662 113.662 0 0 1-80.377 33.293v-11.367a102.307 102.307 0 0 0 94.516-63.153 102.307 102.307 0 0 0 7.787-39.15h11.367Z"/>
                            <path fill="#D9D9D9"
                                  d="M340 170a170.002 170.002 0 0 1-170 170v-17a153.003 153.003 0 0 0 141.354-94.449A153.003 153.003 0 0 0 323 170h17Z"/>
                        </svg>


                        <span className="hidden font-bold lg:inline-block">Shy UI</span></a>
                        <nav className="flex items-center gap-4 text-sm xl:gap-6  border-x border-grid h-full my-0 px-4"><a
                            className="transition-colors hover:text-foreground/80 text-foreground"
                            href="/docs/introduction">Docs</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/80"
                            href="/docs/components">Components</a>
                        </nav>
                    </div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground py-2 h-8 w-full gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15u6ja:"
                        data-state="closed">
                        <a className="mr-4 flex items-center gap-2 " href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                                 viewBox="0 0 340 340" className=" ml-4">
                                <path fill="#D9D9D9"
                                      d="M340 170A169.997 169.997 0 0 0 235.056 12.94 169.998 169.998 0 0 0 12.941 235.057 169.999 169.999 0 0 0 170 340v-68A101.998 101.998 0 0 1 69.96 150.101 102 102 0 0 1 272 170h68Z"/>
                                <path fill="#D9D9D9"
                                      d="M283.34 169.67a113.663 113.663 0 0 1-33.293 80.377 113.662 113.662 0 0 1-80.377 33.293v-11.367a102.307 102.307 0 0 0 94.516-63.153 102.307 102.307 0 0 0 7.787-39.15h11.367Z"/>
                                <path fill="#D9D9D9"
                                      d="M340 170a170.002 170.002 0 0 1-170 170v-17a153.003 153.003 0 0 0 141.354-94.449A153.003 153.003 0 0 0 323 170h17Z"/>
                            </svg>


                            <span className=" font-bold lg:inline-block">Shy UI</span></a>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header