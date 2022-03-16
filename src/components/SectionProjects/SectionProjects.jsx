import React from 'react'
import './SectionProjects.css'
import { useState, useEffect } from 'react'

const SectionProjects = () => {

    const [projects, setProjects] = useState([])


    useEffect(() => {
        setProjects(skills)
    }, [])

    const skills = [
        new Portfolio('Loop Studio', '/assets/img/loop-studio-project.jpg', 'https://loopstudios-landing-page-umida.netlify.app/', 1),
        new Portfolio('Sunny Side', '/assets/img/sunny-side-project.jpg', 'https://compassionate-ptolemy-8eb95a.netlify.app/', 1),
        new Portfolio('Pricing', '/assets/img/pricing-project.jpg', 'https://eager-kirch-2bfbfb.netlify.app/', 2),
        new Portfolio('Cargi', '/assets/img/cargi-project.jpg', 'https://add-cargi.netlify.app/', 2),
        new Portfolio('Movie List Library', '/assets/img/movie-list-project.jpg', 'https://movielistlibrary.netlify.app/', 3),
        new Portfolio('Clothes Shop', '/assets/img/clothes-shop-project.jpg', 'https://kiyimdukoni.netlify.app/', 3),
        new Portfolio('Chat', '/assets/img/chat-project.jpg', 'https://objective-yalow-f7be47.netlify.app/', 3),
        new Portfolio('Movie App', '/assets/img/movie-app-project.jpg', 'https://inspiring-payne-905d7b.netlify.app/', 4),
        new Portfolio('Trip Guide', '/assets/img/trip-guide-project.jpg', 'https://manage-trip-guide-qk8e.vercel.app/', 4)

    ]


    const portfolioTypes = ['/assets/img/allProjects.png', '/assets/img/html$css-depositphotos-bgremover.png', '/assets/img/scss-depositphotos-bgremover.png', '/assets/img/js.svg', '/assets/img/react.png']


    function Portfolio(name, photo, link, category) {
        this.name = name;
        this.photo = photo;
        this.link = link;
        this.category = category;
    }



    const handleClick = (e) => {

        let type = Number(e.target.getAttribute('data-type'));
        if (type === 0) {
            setProjects(skills)
        } else {
            let filteredProjects = skills.filter(function (el) {
                return el.category === type
            });

            setProjects(filteredProjects);
        }
    }

    return (
        <div className="container section-projects">
            <h2 className='section-projects__title'>Projects</h2>
            <p className='section-projects__sub--title'>Projects</p>
            <div className='portfolio-section'>
                {portfolioTypes.map((el, i) => (
                    <div className='portfolio-icon' key={i} >
                        <img src={el} alt="portfolio-icon" onClick={handleClick} data-type={i} />
                    </div>
                ))}

            </div>
            <div className='skills' >
                {projects.map((el, i) => (
                    <div className='projects box' key={i}>
                        <div className="imgBox">
                            <img className='projects__image' src={el.photo} alt={el.name} />
                            <a className='projects-content content' href={el.link}>
                                <div className='projects-info'>
                                    <h2 className='projects__name'>{el.name}</h2>
                                    <a className='projects-content__link' href={el.link} >more details</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a voluptate laborum quod aut repudiandae culpa dolorem obcaecati velit?</p>
                                </div>
                            </a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SectionProjects;
