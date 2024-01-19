import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/GithubShooter.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Diego Ruiz</h1>
        <h3 className="text light">FullStack Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="Me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
    
  )
}

export default Header