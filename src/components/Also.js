import React from 'react';
import Fade from 'react-reveal'


export default function Also(props) {
    return(
        <Fade duration={1500} bottom><div className="m-2.5 font--sans bg-white dark:bg-dark dark:text-gray-400 rounded-lg shadow-[0_20x_20px_rgba(0,0,0,0.2) overflow-hidden w-72] ">
                        <div className="">
                            <div className="">
                                <img src={props.img} className="w-full object-cover h-52" alt="img " />
                            </div>
                            <div className="flex flex-col justify-center items-start  min-h-64">
                                <div className="bg-blue-500 dark:bg-blue-800 w-full">
                                    <h1 className="font--serif color-black max-w-[90%] font-semibold p-5 tracking-wide capitalize lg:leading-[70px] text-2xl  xl:leading-loose">{props.title}</h1>
                                </div>
                                <p className="p__opensans pt-2 p-5">{props.text}</p>
                            </div>
                        </div>
                    </div>
                    </Fade>
    )
}