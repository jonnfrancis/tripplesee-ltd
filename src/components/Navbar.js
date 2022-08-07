import React from "react"
import logo from "../media/icon.png"
import Toggle from '../theme/themeToggle';
import {  animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'


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
        <header className="w-full" id="header">
            <nav className="flex nav">
                <Link to="/">
                    <div className="flex w-14 sm:w-16 o logo">
                    <img src={logo} alt="tripplesee-icon" className=""  onClick={scrollToTop} />
                    </div>
                </Link>
                <button className="px-2 mobile-nav-toggle" onClick={aria} aria-controls="nav-menu" aria-expanded={visibility ? true : false} ><span className="sr-only">Menu</span><i id="icon-menu" className={visibility ? "bx bx-x" : "bx bx-menu"}></i></button>
                <div className="" id="nav-menu">
                    <ul className="flex primary-navigation items-center" data-visible={visibility ? true : "false"}>
                        <Link to="/home"><li className="list-items"><span aria-hidden="true">00</span>Home</li></Link>
                        <Link to="/home/about"><li className="list-items"><span aria-hidden="true">01</span>FAQs</li></Link>
                        <Link to="/services"><li className="list-items"><span aria-hidden="true">02</span>Services</li></Link>
                        <Link to="/contacts">
                            <li className="flex items-center leading-relaxed cursor-pointer text-center justify-center text-xl text-blue-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100">
                                <div aria-hidden="true">
                                    <i className='bx bx-right-arrow-alt'></i>
                                </div> 
                                <div className="">
                                    Contact Us
                                </div>
                            </li>
                        </Link>
                        <li className="list-items">
                            <div className="p-2 backdrop-blur bg-blue-300 dark:bg-dark backdrop-opacity-25 rounded-full">
                                <Toggle />
                            </div>
                            </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}