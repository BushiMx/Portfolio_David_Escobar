import React from "react"; 
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {PiMessengerLogo} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Hablemos</h5>
            <h2>Contacto</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__icon"/>
                        <h4>Email</h4>
                        <h5>davidescobarmx@gmail.com</h5>
                        <a href="mailto:davidescobarmx@gmail.com" target="_blank">Enviar correo electronico</a>
                    </article>
                    <article className="contact__option">
                        <PiMessengerLogo className="contact__icon"/>
                        <h4>Messenger</h4>
                        <h5>David Escobar</h5>
                        <a href="https://m.me/SoyDavidEscobar" target="_blank">Enviar mensaje</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__icon"/>
                        <h4>Whatsapp</h4>
                        {/* <h5>davidescobarmx@gmail.com</h5> */}
                        <a href="https://wa.link/2b2d5p" target="_blank">Enviar mensaje</a>
                    </article>
                </div>

                <form action="">
                    <input type="text" name="name" placeholder="Escribe tu nombre completo" required />
                    <input type="email" name="email" placeholder="Direccion de Email" required />
                    <textarea name="message" id="message" rows="7" placeholder="Mensaje" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>
        </section>
    )
}

export default Contact