import React from 'react'
import axios from 'axios'
import './ModalE.css'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export const ModalE = ({estado, cambiarEstado}) => {

    const id =  JSON.parse(localStorage.getItem("idUser"));

    const [inputs, setInputs] = useState({
        // email: "",
        name: "",
        email: "",
        password: "",
    })

    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);
    
    
    // const {email,nameP,img,category,price,cant,description}= inputs;
    const {name, email, password}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
      e.preventDefault();
    
      const UserE = {
          name, 
          email,
          password,
      };
    
      console.log(UserE);
      setLoading(true);
    
      try {
          const response = await axios.put(`http://localhost:5000/api/users/client/${id}`, UserE);
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
    <>
    {estado && 
        <div className = "Overlay">
            <div className="ContenedorModal">
                <button className="BotonCerrar" onClick={() => cambiarEstado(false)}>
                    X
                </button>
                <h1>Actualización de datos</h1>

                <form action='' className="form2SingU" onSubmit={(e) => onSubmit(e)}>

                    <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser2' required />
                    <input onChange={(e) => onChange(e)} placeholder='Contraseña nueva' name='password' type='password' id='password2' required />
                    <input onChange={(e) => onChange(e)} placeholder='Correo nuevo' name='email' type='email' id='emailSing2' required />

                    
                    
                </form>
                    <button className='btnAct2'onSubmit={() => alert('funciona')}><p className="subPSing">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
            </div>
        </div>
    }
    </>
  )
}
