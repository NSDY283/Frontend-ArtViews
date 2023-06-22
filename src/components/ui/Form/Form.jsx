import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'

export const Form = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading]=useState(false);
    const [error, setError]=useState("");
    
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
        const reponse = await axios.post("https://backend-artviews.onrender.com/api/users/rolUsers", Usuario);
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
        
      setLoading(true);

        try {
            
            
            if(typerole === 'd'){
                const response = await axios.post("https://backend-artviews.onrender.com/api/users/login", Usuario)
                localStorage.setItem("name",  JSON.stringify(response.data.name));
                localStorage.setItem("idUser",  JSON.stringify(response.data._id));
                navigate('/Welcome');
                setLoading(false);
                setError("")
                const Toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    customClass: 'my-sweetalert',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', swal.stopTimer)
                      toast.addEventListener('mouseleave', swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    customClass: 'my-sweetalert',
                    title: 'Inicio de sesión exitoso'
                  })
            }else if (typerole === 'e') {
                const responseE = await axios.post("https://backend-artviews.onrender.com/api/userE/loginE", Usuario)
                localStorage.setItem("name",  JSON.stringify(responseE.data.name));
                localStorage.setItem("email",  JSON.stringify(responseE.data.email));
                localStorage.setItem("idE",  JSON.stringify(responseE.data._id));
                navigate('/WelcomeEmp');
                setLoading(false);
                setError("")
                const Toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    customClass: 'my-sweetalert',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', swal.stopTimer)
                      toast.addEventListener('mouseleave', swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    customClass: 'my-sweetalert',
                    title: 'Inicio de sesión exitoso'
                  })
            }else if (typerole === 'f') {
                const responseA = await axios.post("https://backend-artviews.onrender.com/api/userE/loginAdministrator", Usuario)
                localStorage.setItem("name",  JSON.stringify(responseA.data.name));
                localStorage.setItem("email",  JSON.stringify(responseA.data.email));
                navigate('/WelcomeVenture');
                setLoading(false);
                setError("")
                const Toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    customClass: 'my-sweetalert',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', swal.stopTimer)
                      toast.addEventListener('mouseleave', swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    customClass: 'my-sweetalert',
                    title: 'Inicio de sesión exitoso'
                  })
            }

        }catch (error) {
            setError("Verifique su Contraseña o Correo")
            setLoading(false);
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
                <h2 className='errorCC'>{error}</h2>

            <input value={email} onChange={(e) => HandleChange(e)} placeholder='Correo' name='email' type='email' id='email' required />
            
            <input value={password} onChange={(e) => HandleChange(e)} placeholder='Contraseña' name='password' type='password' id='password' required />
            <div className="containerbutton">
                <button className='btnSend' onSubmit={() => alert('funciona')}><span></span><p className="subP">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>
            <p className="p2">¿Olvidaste tu contraseña?
                <Link to='/SingUP' className="anchorUP">Recuperar</Link>
            </p>
        </form>
    </div>
  )
}


