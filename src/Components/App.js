import React from "react"


const App = () => {
    const [darkMode, setDarkMode] = React.useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className=" px-10 md:px-20 lg:px-40 dark:bg-gray-400">
                {/* <h1 className="bg-purple-600 font-myPopins text-white text-6xl uppercase"> marto marto international</h1>

            <p className="bg-black font-myLobster text-white ">Adebayo moturayo mary</p> */}

                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between ">
                        <h1 className="text-xl font-myPopins">MartoBusayo</h1>
                        <ul className=" flex items-center ">
                            {/* <img src="/img/dark_mode_FILL0_wght400_GRAD0_opsz48.svg" alt=""/> */}

                            <li onClick={()=>setDarkMode(!darkMode)}><svg className=" w-14 h-14  cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            </li>
                            <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#f">Resume</a></li>

                        </ul>
                    </nav>

                    <div className=" text-center p-10">
                        <h2 className="text-5xl py-2 font-medium text-teal-600 md:text-6xl">Akingboye Marto</h2>
                        <h3 className="text-2xl py-2 md:text-3xl">Web Developer</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                            freelancer providing services for programing and need. Join me down below and let's get cracking!
                        </p>

                    </div>
                    <div className=" flex justify-center gap-16 py-3">
                        <img className="w-8 h-8 " src="/img/icons8-twitter-circled-64.png" alt="" />
                        <img className="w-8 h-8 " src="/img/icons8-linkedin-96.png" alt="" />
                        <img className="w-8 h-8 " src="/img/icons8-youtube-90.png" alt="" />

                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
                        <img src="/dev-ed-wave.png" alt="" />

                    </div>
                </section>
                {/* section 2 */}
                <section>
                    <div>
                        <h3 className="text-3xl py-1">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            since the beginning of my journey as a Web developer, i've done remote works for
                            <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital for both business and computer use
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            I offer from a wide range of services, including programing and teaching
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <img src="/design.png" width={100} height={100} alt="" className="mx-auto" />
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2 ">Creating elegant designs suited for your needs design theory.</p>
                            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
                            <p className="text-gray-800 py-1"> Photoshop</p>
                            <p className="text-gray-800 py-1"> VS code</p>
                            <p className="text-gray-800 py-1"> Illustrator</p>
                            <p className="text-gray-800 py-1"> Figma</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <img src="/code.png" width={100} height={100} alt="" className="mx-auto" />
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2 ">Creating elegant designs suited for your needs design theory.</p>
                            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
                            <p className="text-gray-800 py-1"> Photoshop</p>
                            <p className="text-gray-800 py-1"> VS code</p>
                            <p className="text-gray-800 py-1"> Illustrator</p>
                            <p className="text-gray-800 py-1"> Figma</p>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <img src="/consulting.png" width={100} height={100} alt="" className="mx-auto" />
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2 ">Creating elegant designs suited for your needs design theory.</p>
                            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
                            <p className="text-gray-800 py-1"> Photoshop</p>
                            <p className="text-gray-800 py-1"> VS code</p>
                            <p className="text-gray-800 py-1"> Illustrator</p>
                            <p className="text-gray-800 py-1"> Figma</p>

                        </div>


                    </div>
                </section>
                {/* section3 */}
                <section>
                    <div>
                        <h3 className="text-3xl py-1">Portfolio</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni ea ducimus odio optio iure et in debitis, repellendus sapiente nam eaque animi quia. Temporibus quasi tenetur est deleniti adipisci.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1"><img src="/web1.png" alt="" /> </div>
                        <div className="basis-1/3 flex-1"><img src="/web2.png" alt="" /> </div>
                        <div className="basis-1/3 flex-1"><img src="/web3.png" alt="" /> </div>
                        <div className="basis-1/3 flex-1"><img src="/web4.png" alt="" /> </div>
                        <div className="basis-1/3 flex-1"><img src="/web5.png" alt="" /> </div>
                        <div className="basis-1/3 flex-1"><img src="/web6.png" alt="" /> </div>
                    </div>


                </section>

            </main>
        </div>
    )
}

export default App
