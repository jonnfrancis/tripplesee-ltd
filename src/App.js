// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specs from './components/Specs'
import About from './components/About'
import Footer from './components/Footer'
import Also from './components/Also'
// import Gallery from './components/Gallery'
import data from './data.js'
import Fade from 'react-reveal/Fade';


export default function App() {
  const cards = data.map(item => {
    return(
      <Also 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <div>
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
      </div>
      <div></div>
    </div>
  )
}

