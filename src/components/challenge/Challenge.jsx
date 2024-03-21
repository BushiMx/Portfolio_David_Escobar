import React from "react"; 
import './challenge.css'
import img__challenge__reservamos from "../../assets/challenge_reservamos.png"

const info = [
    {
        id:1,
        image: img__challenge__reservamos,
        title: 'Mid - Consulta de clima',
        github: 'https://github.com/BushiMx/challenge-mid-reservamos',
        demo: 'https://bushimx.github.io/challenge-mid-reservamos/'        
    },

]

const Challenge = () => {
    return (
        <section id="portfolio">
            <h5>Code</h5>
            <h2>Challenge</h2>

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

export default Challenge