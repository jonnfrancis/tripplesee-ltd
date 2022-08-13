import React from 'react';
import Fade from 'react-reveal'
import './also.css'
import { FaWindowClose } from "react-icons/fa";
import b1 from '../media/briquettes/1.jpg'
import b2 from '../media/briquettes/2.jpg'
import b3 from '../media/briquettes/3.jpg'
import b4 from '../media/briquettes/4.jpg'
import b5 from '../media/briquettes/7.jpeg'
import b6 from '../media/briquettes/5.jpg'
import b7 from '../media/briquettes/6.jpeg'

const imgData = [
    {
        id: 1,
        img: b1,
        alt: "Tripplesee briquettes"
    },
    {
        id: 2,
        img: b2,
        alt: "Tripplesee briquettes"
    },
    {
        id: 3,
        img: b3,
        alt: "Tripplesee briquettes"
    },
    {
        id: 4,
        img: b4,
        alt: "Tripplesee briquettes"
    },
    {
        id: 5,
        img: b5,
        alt: "Tripplesee briquettes"
    },
    {
        id: 6,
        img: b6,
        alt: "Tripplesee briquettes"
    },
    {
        id: 7,
        img: b7,
        alt: "Tripplesee briquettes"
    },
]

export default function Also() {
    const [model, setModel] = React.useState(false)
    const [tempImg, setTempImg] = React.useState('')
    function getImg(img) {
        setTempImg(img)
        setModel(true)
    }
    function goBack() {
        setModel(false)
    }
    return(
        <div className="also">
            <div className={model ? "model open" : "model"} >
                <img src={tempImg} alt="tripplesee briquettes" />
                <FaWindowClose className="model--svg" onClick={goBack}/>
            </div>
            <div className="py-6">
                <Fade duration={1500} distance={'60px'} bottom delay={0}><h1 className="headtext__cormorant" style={{textAlign: 'center'}}>Gallery📷</h1></Fade>
                <Fade duration={1500} distance={'60px'} bottom delay={0}><p className="p__opensans text-center">click image to enlarge</p></Fade>
            </div>
            <div className="also--gallery">
                {imgData.map((item, index) => {
                        return (
                            <Fade duration={1500} distance={'60px'} bottom delay={0}><div key={index} className="also--pics" onClick={() => getImg(item.img)}>
                                    <img src={item.img} alt={item.alt} style={{width: '100%'}} />
                            </div></Fade>
                        )
                    })}
            </div>    
        </div>
    )
}