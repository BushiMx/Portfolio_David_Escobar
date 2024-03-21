import React from "react"; 
import './testimonials.css'
import avatar_daniel from '../../assets/avatar_daniel.jpeg'
import avatar_fred from '../../assets/avatar_fred.jpeg'
import avatar_maricarmen from '../../assets/avatar_maricarmen.jpeg'
import avatar_ramses from '../../assets/avatar_ramses.jpeg'
import avatar_juancarlos from '../../assets/avatar_juancarlos.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const clients_list = [
    {
        id:1,
        image: avatar_fred,
        name: 'Fred Mastison',
        review: 'Demian is a professional that is a pleasure to work with. A sincere detail oriented person who manages to balance a driving work ethic with a pleasant and enjoyable attitude. He is a pleasure to work with and I would recommend him to any business or other professional.'
    },
    {
        id:2,
        image: avatar_daniel,
        name: 'Daniel Martinez',
        review: 'Es una persona que trabaja en equipo, con iniciativa, dedicado y con liderazgo.'
    },
    {
        id:3,
        image: avatar_maricarmen,
        name: 'Maricarmen Varela',
        review: 'Demian es una persona honorable, un hombre tenaz y decidido, interesado siempre en el mejor funcionamiento de los equipos y está enfocado a ayudarnos a alcanzar nuestros resultados individuales y por equipo.'
    },
    {
        id:4,
        image: avatar_ramses,
        name: 'Ramsés Martínez',
        review: 'Demian es un ejemplo de constante dedicación y fervor por sus ideales, es una persona que siempre consigue lograr sus metas a través de la disciplina y el esfuerzo continuo.'
    },
    {
        id:5,
        image: avatar_juancarlos,
        name: 'Juan Carlos Guinea',
        review: 'Demián es un gran empresario, dedica tiempo a sus compañeros y socios. Siempre está buscando como mejorar y poder crecer tanto él como quienes lo acompañan. Es tenaz y con una gran fuerza para lograr lo que se propone'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Comentarios</h5>
            <h2>Testimonios</h2>

            <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                {
                    clients_list.map(({id, image, name, review}) => { 
                        return(
                            <SwiperSlide key={id} className="testimonial" >
                                <div className="client__avatar">
                                    <img src={image} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
