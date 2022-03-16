import React from 'react'
import './Intro.css'
import Particles from "react-tsparticles";


const Intro = () => {
    return (
        <>
            <div className='intro'>
                <Particles
                    id="tsparticles"
                    canvasClassName="example"
                    options={{
                        fpsLimit: 30,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 0.7,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1500,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="intro-content">
                    <div className="intro-content__container">
                        <p className="intro-content__container__text">I'm</p>
                        <ul className="intro-content__container__list">
                            <li className="intro-content__container__list__item">Abdugafurova Umida</li>
                            <li className="intro-content__container__list__item"> a  Frontend Developer</li>
                        </ul>
                    </div>
                </div>
                <div className="intro-inner">
                    <p className="intro-inner__title">based in Uzbekistan, Tashkent.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Intro;
