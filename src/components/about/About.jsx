import React from 'react';
import './about.css';
import Pic from '../../assets/pic_me01.webp';
import {PiGraduationCapFill} from 'react-icons/pi'
import {BsCodeSlash} from 'react-icons/bs'
// import Pic_small from '../../assets/pic_me02.webp';

const About = () => {
  return ( 
    <section id='about'>
      <h5>Hablemos un poco </h5>
      <h1>Sobre mi</h1>
    

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Pic} alt="David Escobar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <PiGraduationCapFill className='about__icon'/>
              <h5>Graduado</h5>
              <small>ORACLE Next Education</small>
            </article>

            <article className='about__card'>
              <BsCodeSlash className='about__icon'/>
              <h5>FrontEnd</h5>
              <small>Dev</small>
            </article>

          </div>

          <p>
          Estudié Ing. en Computación pero el trabajo
          me llevo hacia la Dirección Organizacional y capacitación,
          lo que permitió desarrollar mis habilidades blandas como la comunicación y reforzar mi forma 
          de trabajar en equipo.
          </p>
          <p>
          Regresé a la TI gracias a Alura Latam y ORACLE en dónde me especialicé 
          como FrontEnd. Lo cual me ha permitido ayudar a profesionistas independientes y negocios a dar a conocer
          sus negocios/servicios en la web y crear una solución personalizada para sus necesidades.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About