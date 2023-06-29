import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/davidescobarmx" className="social_icon" target='_blank' 
        rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/BushiMx/" className="social_icon" target='_blank' 
        rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials