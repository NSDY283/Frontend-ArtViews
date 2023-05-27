import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ValidationU, ValidationE } from './ValidationU'
// import { useSelector } from 'react-redux'

export const Form = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    // const {user} = useSelector(
    //     (state) => state.auth
    // )

    // const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);
    
    const navigate = useNavigate();

    const {email,password}= inputs;
    
    const HandleChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    };

    const getData = async (e) => {
        e.preventDefault()
        const Usuario = {
            email
        };
        const reponse = await axios.post("http://localhost:5000/api/users/rolUsers", Usuario);
        try {
            let userRole = reponse.data.roles
            const typerole = userRole.slice(-1)
            onSubmitLogin(typerole)
            console.log (userRole)
        }catch(error){
            console.error(error)
        }
    }
    
    
    const onSubmitLogin = async (typerole) => {

        const Usuario = {
            email,
            password
        };

        try {
            
            
            if(typerole === '3'){
                const response = await axios.post("http://localhost:5000/api/users/login", Usuario)
                localStorage.setItem("name",  JSON.stringify(response.data.name));
                navigate('/me');
            }else if (typerole === '4') {
                const responseE = await axios.post("http://localhost:5000/api/userE/loginE", Usuario)
                localStorage.setItem("name",  JSON.stringify(responseE.data.name));
                navigate('/me');
            }
            // correct()
        }catch (error) {
            console.error(error)
        };
    };

 
return (
    <div className="form">
        <form action='' className="form2" onSubmit={(e) => getData(e)}>
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
                <button className='btnSend' onSubmit={() => alert('funciona')}><span></span><p className="subP">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>
            <p className="p2">¿No estas registrado aún?
                <Link to='/SingUP' className="anchorUP">Click aquí</Link>
            </p>
        </form>
    </div>
  )
}


