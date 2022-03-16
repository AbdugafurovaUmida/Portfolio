import React from 'react';
import { useState, useEffect } from 'react';
import SectionProjects from '../components/SectionProjects/SectionProjects';
import About from '../components/About/About';
import Loader from '../components/Loader/Loader';
import Intro from '../components/Intro/Intro';
import Sidebar from '../components/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import * as Scroll from 'react-scroll';

const Home = () => {
    let Element = Scroll.Element;

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000);
    }, [])


    return (
        <div className='wrapper'>
            {loader ? <Loader /> :
                <Grid container direction="flex" >
                    <Grid item md={2} style={{ backgroundColor: '#111418' }} >
                        <Sidebar />
                    </Grid>
                    <Grid item md={10}>
                        <Element className='element' name='home'><Intro /></Element>
                        <Element className='element' name='about'><About /></Element>
                        <Element className='element' name='section-projects'><SectionProjects /></Element>
                        <Element className='element' name='education'><Education /></Element>
                        <Element className='element' name='contact'><Contact /></Element>
                    </Grid>
                </Grid>
            }
        </div>
    )
}

export default Home;
