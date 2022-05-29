import React from 'react'
import {Link} from "react-scroll";
import bgPic from '../media/hero.png'
import Fade from 'react-reveal/Fade';


export default function Hero() {
    return(
        <section className="">
            <div className="section__padding hi app__wrapper bg-white dark:bg-dark" id="section1">
                <div className="lo">
                    <Fade duration={2800} distance={'60px'} top delay={400}><p className="font-bold text-xs sm:text-base lg:text-lg leading-5 mt-16 text-center lg:text-left uppercase tracking-widest text-blue-600 dark:text-slate-200">All things heating solutions</p></Fade>
                    
                    <Fade duration={2800} distance={'60px'} bottom delay={600}><h1 className="font--serif font-bold mt-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-normal sm:leading-[70px] md:leading-[69px] dark:text-slate-300 lg:leading-[139%] xl:leading-[156%] text-center lg:text-left text-black">These Briquettes<br /> are the solution</h1></Fade>
                    <Fade duration={2800} distance={'60px'} bottom delay={700}><h6 className="font-normal mt-2 text-lg leading-relaxed text-center lg:text-left text-black dark:text-slate-100">With wood-dependent and gas-dependent populations growing in the region, while access to wood and gas declines, briquettes offer a practical solution to supplement the use of wood and lpg as fuel.</h6></Fade>
                    <div className="flex flex-row gap-6 mt-8 justify-left items-center p-0">
                        <Fade duration={2800} distance={'60px'} delay={800} left><Link activeClass="active" to="section2" spy={true} smooth={true} duration={500} ><button className="btn text-white hover:text-blue-600 bg-blue-600 hover:bg-gray-300 dark:text-slate-800 dark:hover:text-blue-700 dark:bg-slate-400 dark:hover:bg-blue-400">Get Started</button></Link></Fade>
                        <Fade duration={2800} distance={'60px'} delay={800} right><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500} ><button className="btn text-blue-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-blue-600 border border-blue-600 hover:border-gray-700 outline-none dark:border-slate-500 dark:hover:border-blue-600">Learn More</button></Link></Fade>
                    </div>
                </div>
                <div className="hero mt-12 lg:ml-6 w-[100%] sm:w-[80%] ">
                    <Fade duration={2800} distance={'60px'} top delay={1200}><div className="hero-icon ">
                        <img className="heroo" src={bgPic} alt=""></img>
                    </div></Fade>
                    <Fade duration={2800} distance={'60px'} right delay={1000}><div className="hero--bg">
                        <svg width="461" height="351" viewBox="0 0 461 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M137.616 3.8838C191.772 -13.7094 248.538 44.8993 299.36 78.9982C339.911 106.206 371.811 137.917 395.574 176.959C425.628 226.338 482.116 285.918 450.942 328.05C419.378 370.71 337.109 338.857 275.709 338.96C235.907 339.027 199.249 339.808 159.939 328.539C103.305 312.305 22.3446 310.374 3.63433 260.968C-15.1664 211.322 68.2526 190.434 91.0628 146.666C115.147 100.453 82.7854 21.6961 137.616 3.8838Z" fill="url(#paint0_linear_57_136)"/>
                        <defs>
                        <linearGradient id="paint0_linear_57_136" x1="121.847" y1="6.90739" x2="204.741" y2="393.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#958DEF"/>
                        <stop offset="0.505208" stop-color="#676662"/>
                        <stop offset="1" stop-color="#7A7873"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div></Fade><Fade duration={2800} distance={'60px'} left delay={1000}>
                    <div className="hero--bg2">
                        <svg width="422" height="419" viewBox="0 0 422 419" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M211.743 0.512873C268.671 1.77966 302.912 75.8394 339.632 124.801C368.931 163.868 388.578 204.33 398.123 249.028C410.196 305.56 443.854 380.444 400.522 409.926C356.647 439.778 289.501 382.557 231.507 362.39C193.914 349.317 159.051 337.955 125.663 314.343C77.5612 280.327 1.77476 251.784 0.419337 198.97C-0.942641 145.902 84.6962 153.716 120.674 119.929C158.661 84.2547 154.106 -0.769691 211.743 0.512873Z" fill="url(#paint0_linear_57_135)"/>
                        <defs>
                        <linearGradient id="paint0_linear_57_135" x1="195.86" y1="-1.83747" x2="146.467" y2="390.588" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#958DEF"/>
                        <stop offset="0.505208" stop-color="#676662"/>
                        <stop offset="1" stop-color="#7A7873"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div></Fade>
                </div>
            </div>
        </section>
    )
}