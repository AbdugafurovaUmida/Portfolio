import React from 'react'
import Skills from '../Skills/Skills'
import "./About.css"
import { Grid } from '@mui/material';

const About = () => {
    return (
        <div className="about">
            <h2 className='about__title'>About Me</h2>
            <p className='about__sub--title'>About Me</p>
            <Grid
                container
                direction="flex"
            >
                <Grid item md={6} style={{margin:'auto'}} >
                    <p className='about__text'>
                        Hello, my name is Abdugafurova Umida. I studied at Frontend Bootcamp as a front-end developer. I primarily focus on writing clean, elegant, and efficient code. I am proficient in HTML, CSS, and junior level in JavaScript and React. Over the past 1 year
                    </p>
                </Grid>
                <Grid item md={6}
                    container
                    direction='flex'
                    justifyContent='center'
                >
                    <Skills />
                </Grid>
            </Grid>
        </div>
    )
}

export default About
