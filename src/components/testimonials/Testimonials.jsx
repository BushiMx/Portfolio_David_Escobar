import React from "react"; 
import './testimonials.css'
import avatar_mel from '../../assets/avatar_mel.jpg'

const clients_list = [
    {
        id:1,
        image: avatar_mel,
        name: 'Mel Torres',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloremque doloribus incidunt quos atque dolorum neque veritatis est! Fuga ut animi aliquam velit iste nulla quod assumenda explicabo enim distinctio.'
    },
    {
        id:2,
        image: avatar_mel,
        name: 'Mel Torres',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloremque doloribus incidunt quos atque dolorum neque veritatis est! Fuga ut animi aliquam velit iste nulla quod assumenda explicabo enim distinctio.'
    },
    {
        id:3,
        image: avatar_mel,
        name: 'Mel Torres',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloremque doloribus incidunt quos atque dolorum neque veritatis est! Fuga ut animi aliquam velit iste nulla quod assumenda explicabo enim distinctio.'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Comentarios de Clientes</h5>
            <h2>Testimonios</h2>

            <div className="container testimonials__container">
                {
                    clients_list.map(({id, image, name, review}) => { 
                        return(
                            <article key={id} className="testimonial" >
                                <div className="client__avatar">
                                    <img src={image} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials
