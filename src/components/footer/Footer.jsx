import React from "react"; 
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Pie = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">BushiMx</a>

            <ul className="permalinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div className="footer__socials">
                <a href="http://www.linkedin.com/in/davidescobarmx" className="footer_icon" target='_blank' 
                    rel='noreferrer'><BsLinkedin/></a>
                <a href="https://github.com/BushiMx/" className="footer_icon" target='_blank' 
                rel='noreferrer'><BsGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; BushiMx - Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}

export default Pie