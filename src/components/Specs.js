import React from 'react'
// import specPic from '../media/specs.png'
import Fade from 'react-reveal/Fade'

export default function Specs() {
    return(
        <section className="bg--white app__aboutus app__bg flex__center section__padding dark:bg-dark dark:text-gray-400" id="section3">
            <div className="">
                <Fade duration={2800} distance={'60px'} bottom><h1 className="headtext__cormorant text-center">Why Briquettes?</h1></Fade>
                <Fade duration={2800} distance={'60px'} bottom><h6 className="pt-4 text-center p__opensans">A briquette is a compressed block of charcoal dust<span aria-hidden="true"> or other combustible biomass material (e.g. charcoal, sawdust, wood chips, peat, or paper)</span> used for fuel and kindling to start a fire. </h6></Fade>
                <div className="specs--container pt-8">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
                        <Fade delay={600} duration={2800} distance={'60px'} bottom><div className="spec-sheet">
                            <i className='specs--icon bx bxs-thermometer'></i>
                            <h4 className="font--serif font-semibold tracking-wide capitalize lg:leading-[70px] text-xl  xl:leading-loose">Temperature</h4>
                            <p className="p__opensans pt-2">A briquette will heat a Jiko by approximately  25°F (14 °C)<span aria-hidden="true">, so 20 charcoal briquettes will heat it by 500 °F (280 °C).</span></p>
                        </div></Fade>
                        <Fade delay={600} duration={2800} distance={'60px'} bottom><div className="spec-sheet">
                            <i className='specs--icon bx bx-time'></i>
                            <h4 className='font--serif color-black font-semibold tracking-wide capitalize lg:leading-[70px] text-xl  xl:leading-loose'>High Calorific value</h4>
                            <p className="p__opensans pt-2"><span aria-hidden="true">Biomass briquettes also provide more calorific value/kg and</span> save around 30-40 percent of boiler fuel costs.</p>
                        </div></Fade>
                        <Fade delay={600} duration={2800} distance={'60px'} bottom><div className="spec-sheet">
                            <i className='specs--icon bx bx-bulb'></i>
                            <h4 className='font--serif color-black font-semibold tracking-wide capitalize lg:leading-[70px] text-xl  xl:leading-loose'>Renewable energy</h4>
                            <p className="p__opensans pt-2"><span aria-hidden="true">Biomass briquettes are a technically renewable source of energy and their emissions</span> do not constitute an anthropogenic greenhouse gas.</p>
                        </div></Fade>
                        <Fade delay={600} duration={2800} distance={'60px'} bottom><div className="spec-sheet">
                            <i className='specs--icon bx bxs-factory'></i>
                            <h4 className="font--serif color-black font-semibold tracking-wide capitalize lg:leading-[70px] text-xl  xl:leading-loose">Self Sustaining</h4>
                            <p className="p__opensans pt-2">briquettes provide a more stable burn<span aria-hidden="true">, maintaining a steady temperature for a longer period of time with less hand holding than lump charcoal.This is all just the tip of the iceberg.</span></p>
                        </div></Fade>
                    </div>
                    {/* <div><img src={specPic} alt="tripplesee briquette sample" width="250px" className="specs--img" /></div> */}
                </div>
                
            </div>
        </section>
    )
}