import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

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
            .post('https://backend-artviews.onrender.com/api/userE/registerUserE', UsuarioE)
            .then (({data}) => {
                setMessage(data.message);
                setInputs({email: "",name: "",password: "",});
                setTimeout(()=>{
                    setMessage('')
                    navigate('/login')
                    setLoading(false)
                },1500)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    customClass: 'my-sweetalert',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    customClass: 'my-sweetalert',
                    title: 'Emprendimiento registrado exitosamente'
                  })
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
    <div className="formSingEE">
        <form action='' className="form2SingEE" onSubmit={(e) => onSubmit(e)}>
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
                <button className='btnSendSingE' onSubmit={() => alert('funciona')}><span></span><p className="subPSingE">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>
        </form>
    </div>
  )
}
