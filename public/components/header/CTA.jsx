import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
          <a href={CV} download className='btn'>Hent CV</a>
          <a href="#contact" className='btn btn-primary'>Lad os tale</a>
    </div>
  )
}

export default CTA