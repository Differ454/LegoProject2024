import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdWebStories} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/diegoruiz454' target="_blank"><BsLinkedin  size={24}/></a>
        <a href='https://github.com/Differ454' target="_blank"><FaGithub  size={24}/></a>
        <a href='https://ingenieriainforma.blogspot.com/2018/09/egresado-destacado-de-tecnologia.html' target="_blank"><MdWebStories  size={24}/></a>

    </div>
  )
}

export default HeaderSocials