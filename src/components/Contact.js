import React from 'react'
import './contact.css'
import {gsap} from 'gsap'
import {Link} from 'react-router-dom'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite"; 
import {db} from './firebase'
import picture from '../media/contact.jpg'
import { FaInstagram,FaFacebook,FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(CSSRulePlugin);

export default function Contact() {
    const [formData, setFormData] = React.useState(
        {email: "",fullNames:"",message:""}
    )
    const [loader, setLoader] = React.useState(false)
    let tl = gsap.timeline({ defaults: { ease: "power1" } });
    let hiText = React.useRef(null)
    let maskContact = React.useRef(null)
    let contactH = React.useRef(null)
    let contactP = React.useRef(null)
    let contactH1 = React.useRef(null)
    let contactP1 = React.useRef(null)
    let icon1 = React.useRef(null)
    let icon2 = React.useRef(null)
    let icon3 = React.useRef(null)
    let contactForm= React.useRef(null)
    let contact = React.useRef(null)
    let contactHeader = React.useRef(null)

    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    React.useEffect(() => {
        tl.to(contact, {autoAlpha: 1, duration: 0,})
        tl.from(contactHeader, {autoAlpha: 0, duration: .8, x: 20}  )
        tl.from(contactForm, {duration: .8, autoAlpha: 0, y: -20, x: 20} )
        tl.from(hiText, {y: -20, duration: .8, autoAlpha: 0 }, "+=1.6")
        tl.to(maskContact, {y: "-100%", duration: 2} )
        tl.to(maskContact, {visibility: "hidden"})
        tl.from([contactH1, contactP1], {stagger: .2, y: 20, autoAlpha: 0, duration: .8}, "-=2")
        tl.from([contactH, contactP], {stagger: .2, y: 20, autoAlpha: 0, duration: .8}, "-=.8")
        tl.from([icon3, icon1, icon2], {stagger: .4, x: -30, autoAlpha: 0, duration: .8})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function handleSubmit(event){
        event.preventDefault()
        if(!formData.fullNames || !formData.email || !formData.message) {
            alert("Please fill all fields")
            return
        }
        setLoader(true)

        const contactsData = collection(db, 'contacts')
        addDoc(contactsData, {
            name : formData.fullNames,
            email: formData.email,
            message: formData.message,
            created: serverTimestamp()
        }).then(() => {
            alert('Message has been submitted 👍')
            setLoader(false)
        }).catch((error) => {
            alert(error.message)
            setLoader(false)
        })

        setFormData({email: "",fullNames:"",message:""})

    }
    return (
        <div ref={el => contact = el} className="contact">
            <div className="contact--img" style={{backgroundImage: `url(${picture})`}}>
                {/* <img src={picture} alt="Tripplesee contact" /> */}
                <div className="contact--hi">
                    <h1 className="hi--header">
                        <span>Do you want to learn more, </span>  
                        <span>purchase our products or just say hi?</span>
                    </h1>
                    <p ref={el => hiText = el} className="hi--desc">
                        We'd love to hear from you
                    </p>
                </div>
            </div>
            <div className="contact--container ">
                <div className="contact--form">
                <h1 ref={el => contactHeader = el} className="headtext__cormorant text-center">Contact Us</h1>
                    <form ref={el => contactForm = el} onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            placeholder="email"
                            name="email"
                            autoComplete="off"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            placeholder="full name"
                            name="fullNames"
                            autoComplete="off"
                            value={formData.fullNames}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            placeholder="message"
                            name="message"
                            autoComplete="off"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <button className="custom__button text-white" style={{background : loader ? "#ccc" : "blue"}}>Submit</button>
                    </form>
                </div>
                <div className="contact--details">
                    <div className="mask--contact" ref={el => maskContact = el}></div>
                    <h1 ref={el => contactH = el} className="p__cormorant contact--header">Contact</h1>
                    <p ref={el => contactP = el} className="p__opensans contact--desc">trippleseeltd@gmail.com</p>
                    <h1 ref={el => contactH1 = el} className="p__cormorant contact--header">Based in</h1>
                    <p ref={el => contactP1 = el} className="p__opensans contact--desc">P.O. BOX 473 - 20500, Narok</p>
                    <ul className="icons--list flex gap-3">
                    <li ref={el => icon3 = el}><a href="mailto:trippleseeltd@gmail"><FaEnvelope className="Fa" /></a></li>
                        <li ref={el => icon1 = el}><Link to="/instagram/tripplesee"><FaInstagram className="Fa"/></Link></li>
                        <li ref={el => icon2 = el}><Link to="/facebook/tripplesee"><FaFacebook className="Fa" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}