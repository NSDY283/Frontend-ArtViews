import React from 'react'
import { Link } from 'react-router-dom'

export const NavUser = () => {
  return (
    <div className="NavUser">
        <div className="container1User">
            <Link className='anchorUser' to="/SingUP"><p className='userText'>Registrarse como</p>Usuario</Link>
        </div>
        <div className="container2User">
            <Link className='anchorUser' to="/SingUPE"><p className='userText'>Registrarse como</p>Emprendimiento</Link>
        </div>
    </div>
  )
}
