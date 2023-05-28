import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonsLogo = () => {
  return (
    <div className="containerButtons">
        <Link className='SingUP' to="/SingUP">Registrarse</Link>
        <Link className='LogIN' to="/LogIN"><span></span><p className='subP'>Iniciar Sesión</p></Link>
    </div>
  )
}
