import React from 'react';

import './Contact.css'
import { Grid } from '@mui/material';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
// import useGeolocation from "react-navigator-geolocation";




function Map() {

  //  const [latState, setLatState] = useState(0);
  // const [longState, setLongState] = useState(0);

  // useEffect(() => {

  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     if (position.coords.latitude && position.coords.longitude) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     }
  //   });

  // }, []);


  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.362106, lng: 69.274850 }}
    />
  )
}



const WrappedMap = withScriptjs(withGoogleMap(Map))



const Contact = () => {


  //   const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);

  // useEffect(() => {

  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     if (position.coords.latitude && position.coords.longitude) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     }
  //   });

  // }, []);

  // const { isEnabled, coords } = useGeolocation();


  return <section className="contact">
    <h2 className='section-projects__title'>Contact</h2>
    <p className='section-projects__sub--title'>Contact</p>
    <Grid
      spacing={2} container direction="flex"
      justifyContent="space-between"
      alignItems='center'
    >
      <Grid item md={4} style={{ textAlign: 'start' }}>
        <h2 className="contact__title">Address</h2>
        <p className="contact__description">Yunusabad district, Akhmad Donish street <br />
          5 block, 25 apartment, 12<br /> Uzbekistan Tashkent </p>
        <p className="contact__tel"><a href='tel:+998971556140' target="_blank"><AiFillPhone  className='contact__icon' style={{marginRight:'8px',fontSize:'24px'}}/>+99897 1556140</a></p>
        <p className="contact__description"><a href='https://mail.google.com/mail/u/0/#inbox' className='contact__icon' data-bs-toggle="tooltip" target="_blank" title="G-Mail" data-bs-original-title="Gmail" aria-label="Gmail"><SiGmail /></a>abdugafurova93@gmail.com</p>
        <h2 className="contact__sub--title">Follow Me</h2>
        <ul className="social-icons-wrapper">
          <li className="social-icons-instagram"><a className='contact__icon' data-bs-toggle="tooltip" href="https://www.instagram.com/gafurova_93/" target="_blank" title="" data-bs-original-title="Dribbble" aria-label="Dribbble"><FaInstagram /></a></li>
          <li className="social-icons-linkedin"><a className='contact__icon' data-bs-toggle="tooltip" href="https://www.linkedin.com/in/umida-abdugafurova-157972228/" target="_blank" title="" data-bs-original-title="Twitter" aria-label="Twitter"><AiOutlineLinkedin /></a></li>
          <li className="social-icons-facebook"><a className='contact__icon' data-bs-toggle="tooltip" href="https://www.facebook.com/umida.gafurova.93/" target="_blank" title="" data-bs-original-title="Facebook" aria-label="Facebook"><FaFacebookF /></a></li>
          <li className="social-icons-github"><a className='contact__icon' data-bs-toggle="tooltip" href="https://github.com/AbdugafurovaUmida" target="_blank" title="" data-bs-original-title="GitHub" aria-label="GitHub"><BsGithub /></a></li>
          <li className="social-icons-telegram"><a className='contact__icon' data-bs-toggle="tooltip" href="https://web.telegram.org/z/#277683101" target="_blank" title="" data-bs-original-title="Telegram" aria-label="Telegram"><FaTelegramPlane /></a></li>
        </ul>
      </Grid>
      <Grid item md={7}
        style={{ padding: '0 50px 50px 0' }}
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `420px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Grid>
    </Grid>
  </section>
};

export default Contact;
