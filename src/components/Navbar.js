import React from "react"
import logo from "../media/icon.png"
import Toggle from '../theme/themeToggle';
import { Link, animateScroll as scroll } from "react-scroll";



export default function Navbar() {


    const [visibility, setVisibility] = React.useState(false)
    function aria(e) {
        setVisibility(prevState => !prevState)
    }
    function scrollToTop(){
        scroll.scrollToTop(); 
    };
    // function scrollHeader(){
    //     const header = document.getElementById('header')
    //     // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    //     if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    // }
    // window.addEventListener('scroll', scrollHeader)

    return(
        <header className="w-full z-[10000000]" id="header">
            <nav className="flex nav">
                <div className="flex w-14 sm:w-16 o logo">
                   <img src={logo} alt="tripplesee-icon" className=""  onClick={scrollToTop} />
                </div>
                <button className="px-2 mobile-nav-toggle" onClick={aria} aria-controls="nav-menu" aria-expanded={visibility ? true : false} ><span className="sr-only">Menu</span><i id="icon-menu" className={visibility ? "bx bx-x" : "bx bx-menu"}></i></button>
                <div className="" id="nav-menu">
                    <ul className="flex primary-navigation items-center" data-visible={visibility ? true : "false"}>
                        <li className="list-items"><span aria-hidden="true">00</span><Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} >Home</Link></li>
                        <li className="list-items"><span aria-hidden="true">01</span><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500} >FAQs</Link></li>
                        <li className="list-items"><span aria-hidden="true">02</span><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500} >Services</Link></li>
                        <li className="flex items-center leading-relaxed cursor-pointer text-center justify-center text-xl text-blue-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100">
                            <div aria-hidden="true">
                                <i className='bx bx-right-arrow-alt'></i>
                            </div> 
                            <div className="">
                                <Link activeClass="active" to="section5" spy={true} smooth={true} duration={500} >
                                    Contact Us
                                </Link>
                            </div>
                        </li>
                        <li className="list-items">
                            <div className="p-2 bg-blue-400 rounded-full">
                                <Toggle />
                            </div>
                            </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}