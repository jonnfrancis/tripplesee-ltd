import React from 'react';
import Fade from 'react-reveal'


export default function Also(props) {
    return(
        <Fade duration={2800} bottom><div className="bg-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-white shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
                        <div className="relative mt-2 mx-2">
                            <div className="h-56 rounded-2xl overflow-hidden">
                                <img src={props.img} className="object-cover w-full h-full" alt="img " />
                            </div>
                            <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row;">
                            
                            <div
                                className="flex items-center justify-center text-xl bg-white dark:bg-gray-700 hover:bg-red-500 dark:hover:bg-white text-red-500 dark:text-gray-400 hover:text-white dark:hover:text-red-500 rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out;"
                            >
                                <p
                                className=""
                                >{props.title}
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="pt-10 pb-6 w-full">
                            <h1 className="p__opensans hover:text-gray-300">{props.text}</h1>
                        </div>
                    </div></Fade>
    )
}