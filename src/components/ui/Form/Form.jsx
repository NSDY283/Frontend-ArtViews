import React from 'react'
import { Link } from 'react-router-dom'

export const Form = () => {
  return (
    <div className="form">
        <form action='' className="form2">
        <img className="Logo2" src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1678999625/artViews/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_czjzbt.png" alt="" />
            <div className='headerContact'>
                <h3>Bienvenido</h3>
                <p>¿No estas registrado aún?
                    <Link to='/SingUP' className="anchorUP">Registrate</Link>
                </p>
            </div>

            <input placeholder='Nombre' name='name' type='text' id='name' required />
            
            <input placeholder='Contraseña' name='email' type='password' id='email' required />
            <div className="containerbutton">
                <button className='btnSend' onSubmit={() => alert('funciona')}><span></span><p className="subP">Ingresar</p></button>
            </div>
            <p className="p2">¿No estas registrado aún?
                <Link to='/' className="anchorUP">Click aquí</Link>
            </p>
        </form>
    </div>
  )
}
