import React from "react"; 
import './header.css'
import './Cta'
import Cta from "./Cta";
// import Pic from '../../assets/profile-pic.png'
import Pic from '../../assets/profile-pic.webp'
import './HeaderSocials'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola ! Me llamo</h5>
                <h1>David Escobar</h1>
                <h2>FrontEnd Developer</h2>
                <Cta/>

                <HeaderSocials/>
                
                <div className="me">
                    <img src={Pic} alt="Foto de Perfil de David Escobar" />
                </div>

                <a href="#contact" className="scroll__down">Desliza hacia abajo</a>
                
            </div>
        </header>
    )
}

export default Header;