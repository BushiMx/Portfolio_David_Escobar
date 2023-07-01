import React from "react"; 
import './portfolio.css'
import img__proyecto01 from "../../assets/proyecto01.webp"

const info = [
    {
        id:1,
        image: img__proyecto01,
        title: 'Proyecto 1',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
    },
    {
        id:2,
        image: img__proyecto01,
        title: 'Proyecto 2',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
    },
    {
        id:3,
        image: img__proyecto01,
        title: 'Proyecto 3',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
    },
    {
        id:4,
        image: img__proyecto01,
        title: 'Proyecto 4',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
    },
    {
        id:5,
        image: img__proyecto01,
        title: 'Proyecto 5',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
    },
    {
        id:6,
        image: img__proyecto01,
        title: 'Proyecto 6',
        github: 'https://github.com/BushiMx',
        demo: 'https://github.com/BushiMx'        
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