import React from "react"; 
import './portfolio.css'
import img__proyecto01 from "../../assets/proyecto01.webp"
import img__encriptador from "../../assets/proyecto_encriptador.png"
import img__coinbase from "../../assets/proyecto_coinbase.png"
import img__meltorres from "../../assets/proyecto_mel_torres.png"
import imag__ecommerce from "../../assets/proyecto_ecommerce.png"
import imag__optica from "../../assets/proyecto_optica.png"

const info = [
    {
        id:1,
        image: img__encriptador,
        title: 'Encriptador de texto',
        github: 'https://github.com/BushiMx/oracle-encriptador',
        demo: 'https://bushimx.github.io/oracle-encriptador/'        
    },
    {
        id:2,
        image: img__coinbase,
        title: 'Clone Website Coinbase',
        github: 'https://github.com/BushiMx/WebsiteClone-Coinbase',
        demo: 'https://bushimx.github.io/WebsiteClone-Coinbase/'        
    },
    {
        id:3,
        image: img__meltorres,
        title: 'Mel Torres - Wedding Planner - Landing Page',
        github: 'https://github.com/BushiMx/MelTorres',
        demo: 'https://bushimx.github.io/MelTorres/'        
    },
    {
        id:4,
        image: imag__ecommerce,
        title: 'E-commerce',
        github: 'https://github.com/BushiMx/e-commerce',
        demo: 'https://bushimx.github.io/e-commerce/'        
    },
    {
        id:5,
        image: imag__optica,
        title: 'Optica del Centro - Landing Page',
        github: 'https://github.com/BushiMx/OpticaDelCentro',
        demo: 'https://bushimx.github.io/OpticaDelCentro/'        
    },
    {
        id:6,
        image: img__proyecto01,
        title: 'Proyecto 6',
        github: 'https://github.com/BushiMx/OpticaDelCentro',
        demo: 'https://bushimx.github.io/OpticaDelCentro/'        
    },

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Algunos proyectos</h5>
            <h2>Portafolio</h2>

            <div className="container portfolio__container">
                {
                    info.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank">GitHub</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Ver Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio