import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export const Form = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);
    
    const navigate = useNavigate();

    const {email,password}= inputs;
    
    const HandleChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    };
    
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if (email !== '' && password !== ''){
            const Usuario = {
                email,
                password,
            };
            setLoading (true)
            await axios
            .post('http://localhost:5000/api/users/login', Usuario)
            .then ((res) => {
                const {data} = res;
                setMessage(data.message);
                setTimeout(()=>{
                    setMessage('')
                    // console.log(data.token)
                    localStorage.setItem("token",  JSON.stringify(data.token));
                    localStorage.setItem("name",  JSON.stringify(data.name));
                    navigate('/me')
                },1500)
            })
            .catch((error)=>{
                console.error(error)
                setMessage('corrreo o contraseña incorrecto')
                setTimeout(()=>{
                    setMessage("")
                },1500);
            });
            setInputs({email: "", password: ""});
            setLoading(false)
        }
    };
    
    
  return (
    <div className="form">
        <form action='' className="form2" onSubmit={(e) => onSubmit(e)}>
        <img className="Logo2" src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1678999625/artViews/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_czjzbt.png" alt="" />
            <div className='headerContact'>
                <h3>Bienvenido</h3>
                <p>¿No estas registrado aún?
                    <Link to='/SingUP' className="anchorUP">Registrate</Link>
                </p>
            </div>

            <input value={email} onChange={(e) => HandleChange(e)} placeholder='Correo' name='email' type='email' id='email' required />
            
            <input value={password} onChange={(e) => HandleChange(e)} placeholder='Contraseña' name='password' type='password' id='password' required />
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
