import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../ui/Logo/Logo'
import { ButtonsLogo } from '../../ui/ButtonsLogo/ButtonsLogo'

export const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Logo/>
            <ul className='ulHome'>
                <Link className='anchor' to="/">Home</Link>
                <Link className='anchor' to="/AboutUS">¿Quienes Somos?</Link>
            </ul>
            <ButtonsLogo/>
        </nav>
    )
  }