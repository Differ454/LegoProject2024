import React from 'react'
import './Header.css'
import ME from '/assets/cyclops.png'
const CTA = React.lazy(() => import('./CTA'));
const HeaderSocials = React.lazy(() => import('./HeaderSocials'));


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hej jeg er</h4>
        <h1>Diego Ruiz</h1>
        <h3 className="text light">FullStack Udvikler</h3>
        <React.Suspense fallback={<div>Loading...</div>}>
        <CTA />
        </React.Suspense>

        <React.Suspense fallback={<div>Loading...</div>}>
        <HeaderSocials />
        </React.Suspense>

        <div className="Me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
    
  )
}

export default Header