import React from'react';
import './services.css';
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Algunos cursos tomados</h5>
      <h2>Formación</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Certificaciones</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Formación en FrontEnd.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Formación en React.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lógica de programación.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Formación en HTML y CSS.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Formación en Business Agility.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Formación en Desarrollo Personal.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Scrum Foundation Professional Certificate SFPC v2020</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>EF SET English Certificate C2</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>SQL con MySQL Server de Oracle.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Oracle Cloud Infrastructure.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Python, Data Science en OCI y Oracle Analytics.</p>
            </li>
          </ul>
        </article>

        
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Personal</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Productividad: Estrategias para actividades diarias.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Foco: Enfocarse trae más resultados para el día a día.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Hábitos: Ser productivo para cumplir sus metas personales.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Gestión ágil: Liderando el cambio en un ambiente de agilidad.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Organización de equipos ágiles: Las funciones existentes en un equipo.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Managing Emotions in Times of Uncertainty & Stress</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>La empresa ágil: Introduciendo el Business Agility en las organizaciones.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cursos en proceso</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Data visualization: Explorando con Seaborn.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>TypeScript</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Testing.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services