import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './MyProfileU.css'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import { Modal } from '../../ui/Modal/Modal'

//Aqui deveria actualizar los usuarios 

export const MyProfileU = () => {
    
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [loading, setLoading]=useState(false);

    const name1 =  JSON.parse(localStorage.getItem("name"));
    const gmail =  JSON.parse(localStorage.getItem("email"));

    const id =  JSON.parse(localStorage.getItem("idUser"));

    const [inputs, setInputs] = useState({
        // email: "",
        name: "",
        email: "",
        password: "",
    })

    const [message, setMessage]=useState();
    
    
    // const {email,nameP,img,category,price,cant,description}= inputs;
    const {name, email, password}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      const UserE = {
          name, 
          email,
          password,
      };
    
      console.log(UserE);
    
      try {
          const response = await axios.put(`https://backend-artviews.onrender.com/api/users/client/${id}`, UserE);
          setInputs({
              nameP: "",
              email: "",
              password: "",
          });
    
          setTimeout(() => {
              setMessage("");
              setLoading(false);
              navigate('/LogIN')
          }, 1500);
      } catch (error) {
          console.error(error);
          setMessage("Hubo un error");
    
          setTimeout(() => {
              setMessage("");
              setLoading(false);
          }, 1500);
      }
    };

    const navigate = useNavigate();

  return (
    <div className="profileU">
        <Link className='anchorProfileU' to="/Welcome"><img src="https://res.cloudinary.com/duldfbpwz/image/upload/v1680033024/Art%20Views/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_11_zrcujg.png"></img></Link>
        <div className='ContainerProfile1'>
            <img src = 'https://res.cloudinary.com/divor1sn5/image/upload/v1684162588/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_dokjns.png' className='imgProfile'></img>
        </div>
        <div className="ContainerProfile2">
            <div className="container2-0">
                <h1>{name1}</h1>
                <p>{gmail}</p>
                <p>18 Años</p>

            </div>
            <div className="container2-1">
                <button className= "btnActu"onClick={() => cambiarEstadoModal1(!estadoModal1)}>Actualizar datos</button>
                <div className="desplegable">
                    <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686638138/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_3_xpexpq.png" alt="" />
                </div>
            </div>
        </div>

        <div estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
        {estadoModal1 && 
        <div className = "Overlay">
            <div className="ContenedorModal">
                <button className="BotonCerrar" onClick={() => cambiarEstadoModal1(false)}>
                    X
                </button>
                <h1>Actualización de datos</h1>

                <form action='' className="form2SingU" onSubmit={(e) => onSubmit(e)}>

                    <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser1' required />
                    <input onChange={(e) => onChange(e)} placeholder='Contraseña nueva' name='password' type='password' id='password1' required />
                    <input onChange={(e) => onChange(e)} placeholder='Correo nuevo' name='email' type='email' id='emailSing1' required />

                    
                    <button className='btnAct2'onSubmit={() => alert('funciona')}><p className="subPSing">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
                    
                </form>
            </div>
        </div>
    }
    </div>
    </div>
  )
}
