import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './MyProfileE.css'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'


export const MyProfileE = () => {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [loading, setLoading]=useState(false);
    

    const name1 =  JSON.parse(localStorage.getItem("name"));
    const gmail =  JSON.parse(localStorage.getItem("email"));
    const idE =  JSON.parse(localStorage.getItem("idE"));

    

    const [inputs, setInputs] = useState({
        // email: "",
        name: "",
        email: "",
        password: "",
    })

    const [message, setMessage]=useState();
    // const [loading, setLoading]=useState(false);
    
    
    // const {email,nameP,img,category,price,cant,description}= inputs;
    const {name, email, password}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e, id) => {
      e.preventDefault();
    
      const UserE = {
          name, 
          email,
          password,
      };
    
      console.log(UserE);
      setLoading(true);
    
      try {
          const response = await axios.put(`https://backend-artviews.onrender.com/api/users/clientE/${id}`, UserE);
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
    <div className="profileE">
        <Link className='anchorProfileE' to="/WelcomeEmp"><img src="https://res.cloudinary.com/duldfbpwz/image/upload/v1680033024/Art%20Views/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_11_zrcujg.png"></img></Link>
        <div className='ContainerProfileE1'>
            <img src = 'https://res.cloudinary.com/divor1sn5/image/upload/v1683916730/Emprendimientos/sweetmarine__/294137082_5754021084617702_3183418268585916900_n_khd3ot.jpg' className='imgProfileE'></img>
        </div>
        <div className="ContainerProfileE2">
            <div className="containerE2-0">
                <h1>{name1}</h1>
                <p>{gmail}</p>
                <p>Un emprendimiento basado en productos hechos a mano, apoyando el arte y la diversidad de este.</p>

            </div>
            <div className="containerE2-1">
                <button className= "btnActuE"onClick={() => cambiarEstadoModal1(!estadoModal1)}>Actualizar datos</button>
                <div className="desplegableE">
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

                <form action='' className="form2SingU" onSubmit={(e) => onSubmit(e, idE)}>

                    <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser2' required />
                    <input onChange={(e) => onChange(e)} placeholder='Contraseña nueva' name='password' type='password' id='password2' required />
                    <input onChange={(e) => onChange(e)} placeholder='Correo nuevo' name='email' type='email' id='emailSing2' required />

                    
                    
                    <button className='btnAct2'onSubmit={() => alert('funciona')} ><p className="subPSing">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
                </form>
            </div>
        </div>
        }
        
    </div>
    </div>
  )
}
