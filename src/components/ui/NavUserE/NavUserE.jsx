import React from 'react'
import { Link } from 'react-router-dom'

export const NavUserE = () => {
  return (
    <div className="NavUserE">
        <div className="container1UserE">
            <Link className='anchorUserE' to="/SingUP"><p className='userText'>Registrarse como</p>Usuario</Link>
        </div>
        <div className="container2UserE">
            <Link className='anchorUserE' to="/SingUPE"><p className='userText'>Registrarse como</p>Emprendimiento</Link>
        </div>
    </div>
  )
}
