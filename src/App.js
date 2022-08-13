import React, { useEffect } from 'react';
import REACTGA from 'react-ga'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import data from './data.js'
import { ThemeProvider } from './theme/ThemeContext';
import Hero from './components/Hero'
import Layout from './components/Layout'
import Error from './components/Error'
import Specs from './components/Specs'
import About from './components/About'
import Services from './components/Services'
import AllServices from './AllServices';
import Contact from './components/Contact'
import Also from './components/Also'
import Contactlayout from './components/Contactlayout'

import './App.css';



const trackingId = 'UA-225349238-1'
REACTGA.initialize(trackingId)





export default function App() {
  useEffect(() => {
    REACTGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  
  return (
    <ThemeProvider>
      <BrowserRouter  basename="/">
        <Routes>
            <Route path="/" element={<AllServices />} />
            <Route path="home" element={<Layout />}>
              <Route index element={
                <div>
                  <div >
                    <Hero />
                    <Specs />
                    <Also />  
                  </div>
                </div>
              } />
              <Route path="about" element={
                <About />   
                } />
            </Route>
            <Route path="services" element={<Contactlayout />} >
              <Route index  element={<Services slides={data} />} />
            </Route>
            <Route path="contacts" element={<Contactlayout/>} >
              <Route index element={<Contact />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

