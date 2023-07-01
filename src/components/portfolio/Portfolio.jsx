import React from "react"; 
import './portfolio.css'
import img__proyecto01 from "../../assets/proyecto01.webp"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Algunos proyectos</h5>
            <h2>Portafolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img__proyecto01} alt="Proyecto" />
                    </div>
                    <h3>Titulo del proyecto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/BushiMx" className="btn" target="_blank">GitHub</a>
                        <a href="https://github.com/BushiMx" className="btn btn-primary" target="_blank">Ver Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio