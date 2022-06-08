import React, { lazy, Suspense, useEffect } from 'react';
import REACTGA from 'react-ga'
// import logo from './logo.svg';
import './App.css';
import data from './data.js'
import Fade from 'react-reveal/Fade';
import { ThemeProvider } from './theme/ThemeContext';

const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
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
  return (
    <ThemeProvider>
    <div>
      <Suspense fallback={<div class="flex items-center h-screen w-80% justify-center"><div className="dots-bars-6"></div></div>}>
        <Navbar />
        <Hero />
        <About />
        <Specs /> 
        <section className="bg-gray-100 dark:bg-blacker mb-4 h-full md:h-screen w-full;" id="section4">
              <div className="mx-auto px-0 md:px-4 py-4">
              <Fade duration={2800} distance={'60px'} bottom><h1 className="headtext__cormorant text-center pb-6">We Also:</h1></Fade>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
                    {cards}
                  </div>
              </div>
        </section>
        <Footer />
      </Suspense>
    </div>
    </ThemeProvider>
  )
}

