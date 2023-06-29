import React from 'react'
import CV from '../../assets/CV_DavidDemianEscobarVelazquez.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href='#contact' className='btn btn-primary'>Contactemos</a>
    </div>
  )
}

export default Cta