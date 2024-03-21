import React from 'react'
import CV from '../../assets/CV_David_Demian_Escobar_FrontEnd_Dev.pdf'
import RESUME from '../../assets/Resume_David_Demian_Escobar_FrontEnd_Dev.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contactemos</a>
    </div>
  )
}

export default Cta