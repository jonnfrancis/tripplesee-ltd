import React from 'react'
import {gsap} from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import data from '../data'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import knob from '../media/Knob.png'
import {useSwipeable} from 'react-swipeable'
import arrow from '../media/flame.png'
import './services.css';
import {Link} from 'react-router-dom'

gsap.registerPlugin(CSSRulePlugin);

export default function About({slides}) {
    let services = React.useRef(null)
    let title = React.useRef(null)
    let description = React.useRef(null)
    let small = React.useRef(null)
    let button = React.useRef(null)
    let text = React.useRef(null)
    let tl = gsap.timeline({ defaults: { ease: "power1" } });
    let slider = React.useRef(null)
    let prev = React.useRef(null)
    let next = React.useRef(null)
    
    
    const windowWidth = React.useState(window.innerWidth)
    const [current, setCurrent] = React.useState(0)
    const [bounceAlpha, setBounceAlpha] = React.useState(false)
    const length = slides.length
    
    React.useEffect(() => {
        
        function setEffect() {
                if(windowWidth[0] < 750){
                    tl.to(slider, {visibility: 'visible', duration: 0})
                    tl.from(services, {scale: 1.2, duration: .8})
                    tl.to(text, {y: "0%", duration: 1}, "-=.6")
                    tl.to(title, {duration: .8, autoAlpha: 1, y: -20}, "-=.1")
                    tl.to(description, {duration: .8, autoAlpha: 1, y: -20}, "-=.5")
                    tl.to(button, {autoAlpha: 1, duration:.8, width: "58px", y: 20}, "-=.6")
                    tl.to(small, {autoAlpha: 1, duration:.8, y:20}, "-=.6")
                    tl.to(prev, {autoAlpha: 1, duration:.8}, "-=.6")
                    tl.to(next, {autoAlpha: 1, duration:.8}, "-=.6")
                }
                else if(windowWidth[0] > 750){
                    tl.to(slider, {visibility: "visible", duration: 0})
                    tl.from(services, {scale: 1.08, duration: .8})
                    tl.to(text, {autoAlpha:1 , duration: 1, width: "65%"}, "-=.5")
                    tl.to(title, {y: 20, autoAlpha: 1, duration:.8,}, "-=.2")
                    tl.to(description, {y: 40, autoAlpha: 1, duration: .8}, "-=.6")
                    tl.to(button, {autoAlpha: 1, duration:.8, width: "58px", y: 20}, "-=.6")
                    tl.to(small, {autoAlpha: 1, duration:.8, y:20}, "-=.6")
                    tl.to(prev, {autoAlpha: 1, duration:.8}, "-=.6")
                    tl.to(next, {autoAlpha: 1, duration:.8}, "-=.6")
                }
            
            
        }
        setEffect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const handlers = useSwipeable({
        onSwipedLeft: prevSlide,
        onSwipedRight: nextSlide,
      });

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    function openHome(e) {
        tl.to(button, {background: "black", duration: .8, width: "0px"})
        tl.to(small, {y: -20, autoAlpha: 0, duration: .8}, "-=.8")
        tl.to(description, {autoAlpha: 0, duration: .8}, "-=.6")
        tl.to(title, {autoAlpha: 0, duration: .8}, "-=.6")
        tl.to(title, {autoAlpha: 0, duration: .8}, "-=.6")
        tl.to(text, {bottom: "-70%", duration: .8})
        tl.to(services, {visibility: "hidden", duration: .8},)
    }

    return (
        <section className="slider" ref={el => slider = el}>
            <div {...handlers}  className="icons">
                <div className="icon--previous" onClick={nextSlide}>
                <div className="center-con">
                    <div className="round" ref={el => prev = el} onClick={() => {setBounceAlpha(prevAlpha => !prevAlpha)}} >
                        <div id="cta">
                            <FaAngleLeft className={bounceAlpha ? "arrow primera prev bounceAlpha" : "arrow primera prev" } />
                            <FaAngleLeft className={bounceAlpha ? "arrow segunda prev bounceAlpha" : "arrow segunda prev" }/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="icon--next" onClick={prevSlide}>
                <div className="center-con">
                    <div className="round" ref={el => next = el}>
                        <div id="cta">
                            <FaAngleRight className={bounceAlpha ? "arrow primera next bounceAlpha" : "arrow primera next" }  />
                            <FaAngleRight className={bounceAlpha ? "arrow segunda next bounceAlpha" : "arrow segunda next" } />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            {data.map((slide, index) => {
                return (
                    <div  className= { index === current ? "services active" : "services"} id="services" key={index} >
                        {index === current && (<div id="bg" className="bg" ref={el => services = el} style={{ backgroundImage:`url(${slide.img})`}}>
                            <div  ref={el => text = el} className="services--text">
                            <div className="knob-container">
                                <img src={knob} alt="knob" />
                            </div>
                                <h1 ref={el => title = el} className="services--title">{slide.title}</h1>
                                <p ref={el => description = el} className="services--desc">{slide.text}</p>
                                <Link to="/home"><div ref={el => button= el} className="services--button" onClick={openHome} style={{ background:`${slide.color}`, boxShadow: `0px 0px 23px ${slide.colorAlt}`}}> 
                                    <img src={arrow} alt="button arrow" />
                                </div></Link>
                                <small ref={el => small = el} className="card--login" style={{color: `${slide.color}`}}>Click above to learn more!</small>
                            </div>
                        </div>)}
                    </div>
                )
            })
            } 
        </section>
    )
}