import React from "react"; 
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {PiUserLight} from 'react-icons/pi'
import {LiaDev} from 'react-icons/lia'
import {BiCodeBlock} from 'react-icons/bi'
import {SlPeople} from 'react-icons/sl'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from "react"


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><PiUserLight/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiCodeBlock/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><LiaDev/></a>
            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><SlPeople/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
        </nav>
    )
}

export default Nav