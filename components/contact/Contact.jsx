import React from 'react'
import './Contact.css'
import { MdAttachEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_qtyadkk', 'template_a4gicdz', form.current, 'unMpfQ-R-TCO-9mTn')
    e.target.reset();
  };

  return (
    <section id='contact'>
      
      
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon' size={28}/>
            <h4>Email</h4>
            <h5>differ454@hotmail.com</h5>
            <a href='mailto:Differ454@hotmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin className='contact__option-icon' size={28}/>
            <h4>Linkedin</h4>
            <a href='https://www.linkedin.com/in/diegoruiz454/' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' size={28}/>
            <h4>WhatsApp</h4>
            {/* <h5>+45 28592968</h5> */}
            <a href='https://api.whatsapp.com/send?phone=+4528592968' target='_blank'>Send a message</a>
          </article>

        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact