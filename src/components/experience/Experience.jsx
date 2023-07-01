import React from "react"; 
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Skills</h5>
            <h2>Skills</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>FrontEnd Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>HTML 5</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>React</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>NODE</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Atomic Design</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>SCRUM Fundamentals</h4>
                        </article>
                    </div>
                </div>
                
                <div className="experience__backend">
                    <h3>BackEnd Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>MySQL</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Oracle Cloud Infrastructure</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Python</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Data Science en OCI</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Oracle Analytics</h4>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience