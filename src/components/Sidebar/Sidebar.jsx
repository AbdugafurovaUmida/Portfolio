import React from 'react'
import * as Scroll from 'react-scroll';
import './Sidebar.css'

const Sidebar = () => {

    let Link = Scroll.Link;

    return (
        <nav className='sidebar-wrapper'>
            <Link to='home'><img className='header-logo' src='/assets/img/logo-origin.png' /></Link>
            <ul className='sidebar-menu'>
                <li className='sidebar-menu__item'><Link activeClass='active' className='sidebar-menu__link' to='home' spy={true} smooth={true} offset={-20} duration={2000} >Home</Link></li>
                <li className='sidebar-menu__item'><Link activeClass='active' className='sidebar-menu__link' to='about' spy={true} smooth={true} offset={0} duration={2000}>About Me</Link></li>
                <li className='sidebar-menu__item'><Link activeClass='active' className='sidebar-menu__link' to='section-projects' spy={true} smooth={true} offset={0} duration={2000}>Projects</Link></li>
                <li className='sidebar-menu__item'><Link activeClass='active' className='sidebar-menu__link' to='education' spy={true} smooth={true} offset={40} duration={2000}>Experience &#38; Education</Link></li>
                <li className='sidebar-menu__item'><Link activeClass='active' className='sidebar-menu__link' to='contact' spy={true} smooth={true} offset={0} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Sidebar
