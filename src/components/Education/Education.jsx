import './Education.css'
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";


const Education = () => {
    return <section className="cd-container">
        <h2 className='section-projects__title'>Experience &amp; Education</h2>
        <p className='section-projects__sub--title'>Experience &amp; Education</p>
        <div id="cd-timeline" >
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                    <span className='cd-timeline-icon'><FaGraduationCap /></span>
                </div>
                <div className="cd-timeline-content">
                    <h2>Najot Ta`lim</h2>
                    <p>Frontend Developer</p>
                    
                    <p>
                        I obtained all essential skills,technologies as a Frontend Developer at Najot Talim educational center and practiced throughout the bootcamp course. I learned to create   websites with the help of CSS, Sass,Bootstrap and make responsive for all devices, and got skills of Javascript in order to make them functional.
                    </p>
                    <span className="cd-date">2021-2022</span>
                </div>
            </div>
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                    <span className='cd-timeline-icon'><FaGraduationCap /></span>
                </div>
                <div className="cd-timeline-content">
                    <h2>IT Park (Tumaris Tech)</h2>
                    <p>Frontend Developer</p>
                    <p>I gained general knowledge,technologies as a Frontend Development online course at IT Park</p>
                    <span className="cd-date">2020-2021</span>
                </div>
            </div>
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                    <span className='cd-timeline-icon'><MdWork /></span>
                </div>
                <div className="cd-timeline-content">
                    <h2>Abutech Digital Company</h2>
                    <p>Intern</p>
                    <p>Worked with a team of three developers to build a marketing website and e-commerce platform.And we worked on a lot of bugs. During this practice, I was able to use GraphQl, Git Hub, Redux, TypeScript, which I didn't know much about.
                        Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript and React
                    </p>
                    <span className="cd-date">2022</span>
                </div>
            </div>
        </div>
    </section>

};

export default Education;
