import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/SingUPE/SingUPE.css'

export const FormSingE = () => {
  return (
    <div className="formSingE">
        <form action='' className="form2SingE">
            <div className='headerContactSingE'>
                <h3>Bienvenido</h3>
                <p>¿Ya tienes cuenta?
                    <Link to='/LogIN' className="anchorLOGE">Iniciar Sesión</Link>
                </p>
            </div>

            <input placeholder='Nombre de Usuario' name='name' type='text' id='nameUserE' required />
            <input placeholder='Contraseña' name='email' type='password' id='passwordE' required />
            <input placeholder='Confirmar contraseña' name='email' type='password' id='confirmPasswordE' required />

            <input placeholder='Correo' name='email' type='email' id='emailSingE' required />

            <div className="containerbuttonSingE">
                <button className='btnSendSingE' onSubmit={() => alert('funciona')}><span></span><p className="subPSingE">Ingresar</p></button>
            </div>
        </form>
    </div>
  )
}
