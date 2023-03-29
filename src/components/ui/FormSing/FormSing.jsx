import React from 'react'
import { Link } from 'react-router-dom'

export const FormSing = () => {
  return (
    <div className="formSing">
        <form action='' className="form2Sing">
            <div className='headerContactSing'>
                <h3>Bienvenido</h3>
                <p>¿Ya tienes cuenta?
                    <Link to='/LogIN' className="anchorLOG">Iniciar Sesión</Link>
                </p>
            </div>

            <input placeholder='Nombre de Usuario' name='name' type='text' id='nameUser' required />
            <input placeholder='Contraseña' name='email' type='password' id='password' required />
            <input placeholder='Confirmar contraseña' name='email' type='password' id='confirmPassword' required />

            <div className="container1">
                <input placeholder='Fecha nacimiento' name='email' type='date' id='date' required />
                <input placeholder='Correo' name='email' type='email' id='emailSing' required />
            </div>

            <div className="containerbuttonSing">
                <button className='btnSendSing' onSubmit={() => alert('funciona')}><span></span><p className="subPSing">Ingresar</p></button>
            </div>
        </form>
    </div>
  )
}
