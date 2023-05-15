import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export const FormSing = () => {
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
        date: "",
    })
    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);
    
    const {email,name,password,date}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if (name !== '' && email !== '' && password !== '' && date !== ''){
            const Usuario = {
                name, 
                email,
                password,
                date,
            }
            setLoading (true)
            await axios
            .post('http://localhost:5000/api/users/registerUser', Usuario)
            .then (({data}) => {
                setMessage(data.message);
                setInputs({email: "",name: "",password: "",date: "",});
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
    <div className="formSing">
        <form action='' className="form2Sing" onSubmit={(e) => onSubmit(e)}>
            <div className='headerContactSing'>
                <h3>Bienvenido</h3>
                <p>¿Ya tienes cuenta?
                    <Link to='/LogIN' className="anchorLOG">Iniciar Sesión</Link>
                </p>
            </div>

            <input value={name} onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser' required />
            <input value={password} onChange={(e) => onChange(e)} placeholder='Contraseña' name='password' type='password' id='password' required />
            <input placeholder='Confirmar contraseña' type='password' id='confirmPassword' required />

            <div className="container1">
                <input value={date} onChange={(e) => onChange(e)} placeholder='Fecha nacimiento' name='date' type='date' id='date' required />
                <input value={email} onChange={(e) => onChange(e)} placeholder='Correo' name='email' type='email' id='emailSing' required />
            </div>

            <div className="containerbuttonSing">
                <button className='btnSendSing' onSubmit={() => alert('funciona')}><span></span><p className="subPSing">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>
        </form>
    </div>
  )
} 
