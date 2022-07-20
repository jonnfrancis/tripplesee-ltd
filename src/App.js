import React, { lazy, Suspense, useEffect } from 'react';
import REACTGA from 'react-ga'
// import logo from './logo.svg';
import {gsap} from 'gsap';
import pod from './media/icon.webp'
import './App.css';
import data from './data.js'
import Fade from 'react-reveal/Fade';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Specs = lazy(() => import('./components/Specs'))
const About = lazy(() => import('./components/About')) 
const Footer = lazy(() => import('./components/Footer'))
const Also = lazy(() => import('./components/Also'))
const trackingId = 'UA-225349238-1'
REACTGA.initialize(trackingId)
// import Gallery from './components/Gallery'




export default function App() {
  useEffect(() => {
    REACTGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const cards = data.map(item => {
    return(
      <Also 
        key={item.id}
        {...item}
      />
    )
  })
  let image = React.useRef(null)
  let divider = React.useRef(null)
  let container = React.useRef(null)
  let items = React.useRef(null)
  let body = React.useRef(null)
  let everything = React.useRef(null)

  let tl = gsap.timeline({ defaults: { ease: "power1" } });

  React.useEffect(() => {
    tl.to(everything, {opacity: '1', duration: .5})
    tl.to(divider, {height: '8rem', duration: 1})
    tl.to(image, {left: '18%', duration: 1}, '-=.6')
    tl.to(items, {opacity: '1', left: '55%', duration: 1}, '-=1')
    tl.to(image, { left: '51%', delay: 1, duration: 1 })
    tl.to(items, { opacity: '0' , duration: 1}, '-=1')
    tl.to(divider, { height: '0', duration: 0.5 })
    tl.to(container, { opacity: '0', duration: 0.5 ,delay: 0.25 })
    tl.to(container, {display: 'none'})
    tl.to(body, { overflow: 'visible' });
  })
  return (
    <ThemeProvider>
    <div className="body" ref={el => everything= el}>
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
      <div className="hs" ref={el => body = el}>
        <Navbar />
        <Hero />
        <Suspense fallback={<div class="flex items-center h-screen w-80% justify-center"><div className="dots-bars-6"></div></div>}>
          <About />
          <Specs /> 
          <section className="bg--white app__aboutus app__bg flex__center dark:bg-blacker dark:text-gray-400" id="section4">
                <div className="mx-auto px-0 md:px-4 py-4 w-[85%]">
                <Fade duration={1700} distance={'60px'} bottom><h1 className="headtext__cormorant text-center pb-6">We Also:</h1></Fade>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-start gap-4 ">
                      {cards}
                    </div>
                </div>
          </section>
          <Footer />
        </Suspense>
      </div>
    </div>
    </ThemeProvider>
  )
}

