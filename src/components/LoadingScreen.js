import React from 'react'
import {gsap} from 'gsap';
import pod from '../media/icon.webp'

export default function LoadingScreen() {
    let image = React.useRef(null)
    let divider = React.useRef(null)
    let container = React.useRef(null)
    let items = React.useRef(null)
    let everything = React.useRef(null)
    const windowWidth = React.useState(window.innerWidth)

    let tl = gsap.timeline({ defaults: { ease: "power1" } });
    React.useEffect(() => {
        tl.to(everything, {autoAlpha: '1', duration: 0})
        tl.to(divider, {height: '8rem', duration: 1})
        tl.to(image, {left: () => windowWidth[0] < 750 ? '18%' : '30%', duration: 1}, '-=.6')
        tl.to(items, {autoAlpha: '1', left: '55%', duration: 1}, '-=1')
        tl.to(image, { left: '51%', delay: 1, duration: 1 })
        tl.to(items, { autoAlpha: '0' , duration: 1}, '-=1')
        tl.to(divider, { height: '0', duration: 0.5 })
        tl.to(container, { autoAlpha: '0', duration: 0.5 ,delay: 0.25 })
        tl.to(container, {display: 'none'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div ref={el => everything = el} className="loader-container">
            <div className="container" ref={el => container = el}>
                <div className="loader">
                <img alt="podcast logo" src={pod} ref={el => image = el } width="100px" className="logo-loader" /> 
                <div ref={el => divider = el} className="divider"></div>
                <div className="mask"></div>
                <ul className="items leading-relaxed cursor-pointer text-xl text-blue-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100" ref={el => items = el}>
                    <li className="item item2" >Innovation</li>
                    <li className="item item1">Briquettes</li>
                    <li className="item item3">Energy</li>
                </ul>
                </div>
            </div>
        </div>
    )
}