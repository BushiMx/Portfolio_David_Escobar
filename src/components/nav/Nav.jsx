import React from "react"; 
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {PiUserLight} from 'react-icons/pi'
import {LiaDev} from 'react-icons/lia'
import {BiCodeBlock} from 'react-icons/bi'
import {SlPeople} from 'react-icons/sl'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav = () => {
    return (
        <nav>
            <a href="#home"><AiOutlineHome/></a>
            <a href="#about"><PiUserLight/></a>
            <a href="#portfolio"><BiCodeBlock/></a>
            <a href="#testimonials"><SlPeople/></a>
            <a href="#services"><LiaDev/></a>
            <a href="#contact"><AiOutlineMessage/></a>
        </nav>
    )
}

export default Nav