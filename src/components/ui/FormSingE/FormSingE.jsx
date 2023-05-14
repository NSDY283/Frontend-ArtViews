import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export const FormSingE = () => {
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
    })
    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);
    
    const {email,name,password}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if (name !== '' && email !== '' && password !== ''){
            const UsuarioE = {
                name, 
                email,
                password,
            }
            setLoading (true)
            await axios
            .post('http://localhost:5000/api/userE/registerUserE', UsuarioE)
            .then (({data}) => {
                setMessage(data.message);
                setInputs({email: "",name: "",password: "",});
                setTimeout(()=>{
                    setMessage('')
                    navigate('/login')
                    setLoading(false)
                },1500)
            })
            .catch((error)=>{
                console.error(error)
                setMessage('hubo un error')
                setTimeout(()=>{
                    setMessage("")
                    setLoading(false)
                },1500);
            });
        }
    };
    
    const navigate = useNavigate();

  return (
    <div className="formSingE">
        <form action='' className="form2SingE" onSubmit={(e) => onSubmit(e)}>
            <div className='headerContactSingE'>
                <h3>Bienvenido</h3>
                <p>¿Ya tienes cuenta?
                    <Link to='/LogIN' className="anchorLOGE">Iniciar Sesión</Link>
                </p>
            </div>

            <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUserE' required />
            <input onChange={(e) => onChange(e)} placeholder='Contraseña' name='password' type='password' id='passwordE' required />
            <input placeholder='Confirmar contraseña' name='password' type='password' id='confirmPasswordE' required />

            <input onChange={(e) => onChange(e)} placeholder='Correo' name='email' type='email' id='emailSingE' required />

            <div className="containerbuttonSingE">
                <button className='btnSendSingE' onSubmit={() => alert('funciona')}><span></span><p className="subPSingE">Ingresar</p></button>
            </div>
        </form>
    </div>
  )
}
