import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarLateralE = () => {
  return (
    <nav className='NavBarLateral'>
        <img className="Logo" src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1678999625/artViews/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_czjzbt.png" alt="" />
        <ul className='ulHome2'>
            <div className="animation">
                <Link className='anchor2' to="/WelcomeEmp">Inicio</Link>
            </div>
            <div className="animation">
                <Link className='anchor2' to="/ProductsEmp">Mis Productos</Link>
            </div>
            <div className="animation">
                <Link className='anchor2' to="/Marketplace">Marketplace</Link>
            </div>
        </ul>
        <div className='container2'>
          <img className='image1'src="https://res.cloudinary.com/divor1sn5/image/upload/v1684109495/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_smiaot.png" alt="" />
        </div>
    </nav>
  )
}
