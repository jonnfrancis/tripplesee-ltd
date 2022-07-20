import React from 'react'
import logo from "../media/icon.png"
import flames from '../media/flame.svg'
import { FiFacebook, FiTwitter, FiMail , FiArrowUp } from 'react-icons/fi';
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
    function scrollToTop(){
        scroll.scrollToTop(); 
    };
    
    return(
        <section className="app__footer bg-bg-light dark:bg-bg-dark  section__padding dark:text-gray-400" id="section5">
            <div className="app__footerOverlay">
                <div className="app__footerOverlay-black" />
                <div className="app__footerOverlay-img app__bg" />
            </div>
            <Fade duration={1700} distance={'60px'} right><div className="app__newsletter">
                <div className="app__newsletter-heading">
                <div className="flex items-center justify-center flex-col" style={{ marginBottom: '1rem' }}>
                    <p className="p__cormorant">Newsletter</p>
                    <img src={flames} alt="flames_image" className="spoon__img self-center" />
                </div>
                <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
                </div>
                <div className="app__newsletter-input flex__center">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom__button">Subscribe</button>
                </div>
            </div></Fade>
                {/* <img src={logo} alt='tripplesee logo' /> */}
            <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <Fade duration={1700} distance={'60px'} bottom><h1 className="app__footer-headtext bg-bg-dark text-transparent dark:bg-bg-light bg-clip-text">Contact Us</h1></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">P.O. BOX 473 - 20500, Narok</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">+254 710 424 627</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">trippleseeltd@gmail.com</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">In case of any query, Email us</p></Fade>
            </div>
            <div className="app__footer-links_logo flex flex-col items-center">
                <Fade duration={1700} distance={'60px'} bottom><img src={logo} alt="footer_logo" /></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p></Fade>
                <Bounce duration={1700} distance={'60px'} left><img src={flames} className="spoon__img" alt="flames__img" style={{ marginTop: 15 }} /></Bounce>
                <Fade duration={1700} distance={'60px'} right><div className="app__footer-links_icons flex">
                <FiFacebook />
                <FiTwitter />
                <a href="mailto:trippleseeltd@gmail"><FiMail /></a>
                </div></Fade>
            </div>
            <div className="app__footer-links_work">
                <Fade duration={1700} distance={'60px'} bottom><h1 className="app__footer-headtext text-transparent bg-bg-dark dark:bg-bg-light bg-clip-text">Working Hours</h1></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">Monday-Friday:</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">08:00 am - 12:00 am</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">Saturday-Sunday:</p></Fade>
                <Fade duration={1700} distance={'60px'} bottom><p className="p__opensans">07:00 am - 11:00 pm</p></Fade>
            </div>
            <div id="up" onClick={scrollToTop} className="fixed bottom-8 right-4 text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-gray-400 "><FiArrowUp/></div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans text-center">Copyright &#169;2020 All rights reserved | Read Tripple See's<div className="underline underline-offset-2 decoration-blue-600 text-blue-600 decoration-2 hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white">Terms of Services</div></p>
            </div> 
        </section>
    )
}