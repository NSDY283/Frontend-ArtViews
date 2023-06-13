import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

//Aqui deveria actualizar los usuarios 

export const MyProfileU = () => {

    
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
    <div className="formSing">
        <h1>Al actualizar los datos se debe loguear de nuevo</h1>
        <form action='' className="form2Sing" onSubmit={(e) => onSubmit(e)}>

            <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser' required />
            <input onChange={(e) => onChange(e)} placeholder='Contraseña' name='password' type='password' id='password' required />
            <input onChange={(e) => onChange(e)} placeholder='Correo' name='email' type='email' id='emailSing' required />

            <div className="containerbuttonSing">
                <button onSubmit={() => alert('funciona')}><span></span><p className="subPSing">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
            </div>
        </form>
    </div>
  )
}
