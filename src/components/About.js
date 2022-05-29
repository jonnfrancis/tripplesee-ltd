import React from 'react'
import {Link} from "react-scroll";
import G from '../media/G.png'
import briquette from '../media/briquette.png'
import flames from '../media/flame.svg'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

export default function About() {
    return(
        <section className="app__aboutus app__bg flex__center section__padding" id="section2">
            <div className="app__aboutus-overlay flex__center">
                <img src={G} alt="g" class="w-[391px] z-0 opacity-20 dark:opacity-70" />
            </div>

            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <Fade duration={2800} distance={'60px'} bottom ><h1 className="headtext__cormorant">About Us</h1></Fade>
                    <Bounce duration={2800} distance={'60px'} bottom ><img src={flames} alt="flames" className="spoon__img" /></Bounce>
                    <Fade duration={2800} distance={'60px'} bottom ><p className="p__opensans">Tripple See limited is dedicated to finding climate neutral affordable and sustainable technological solutions for converting waste biomass into renewable energy. </p></Fade>
                    <Fade duration={2800} distance={'60px'} right><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500} ><button type="button" className="btn border border-blue-900 dark:border-gray-500 text-blue-600 dark:text-gray-400">Know More</button></Link></Fade>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={briquette} alt="about_knife" className="" />
                </div>

                <div className="app__aboutus-content_history">
                    <Fade duration={2800} distance={'60px'} bottom><h1 className="headtext__cormorant">Our Mission</h1></Fade>
                    <Bounce duration={2800} distance={'60px'} bottom ><img src={flames} alt="flames" className="spoon__img"/></Bounce>
                    <Fade duration={2800} distance={'60px'} bottom ><p className="p__opensans">The company is therefore to develop novel technologies for the conversion of waste biomass to energy and other useful industrial products.</p></Fade>
                    <Fade duration={2800} distance={'60px'} left><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500} ><button type="button" className="btn bg-blue-500 dark:bg-gray-600 text-white dark:text-gray-900">Know More</button></Link></Fade>
                </div>
            </div>
        </section>
        
    )    
}