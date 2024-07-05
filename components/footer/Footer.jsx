import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (

    <footer id='footer'>
      <a href='#' className='footer__logo'>Diego Ruiz Portfolio</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
     </ul>

    <div className="footer__socials">

      <a href='https://facebook.com'><FaFacebook /></a> 
      <a href='https://www.instagram.com/diegoruiz8325/'><FaInstagram /></a> 
      <a href='https://www.linkedin.com/in/diegoruiz454/'><BsLinkedin /></a> 
    </div>
     <div className="footer__copyright">
      <small>&copy; DIEGO RUIZ PORTFOLIO. ALL rights reserved. </small>
     </div>
    </footer>
  )
}

export default Footer