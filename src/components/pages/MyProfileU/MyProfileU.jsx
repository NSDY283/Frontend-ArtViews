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
    
//   const id =  JSON.parse(localStorage.getItem("idUser"));

//     const [inputs, setInputs] = useState({
//         // email: "",
//         name: "",
//         email: "",
//         password: "",
//     })

//     const [message, setMessage]=useState();
//     const [loading, setLoading]=useState(false);
    
    
//     // const {email,nameP,img,category,price,cant,description}= inputs;
//     const {name, email, password}= inputs;
    
//     const onChange = (e)=> {
//         setInputs({ ...inputs, [e.target.name]: e.target.value})
//     }
    
//     const onSubmit = async (e) => {
//       e.preventDefault();
    
//       const UserE = {
//           name, 
//           email,
//           password,
//       };
    
//       console.log(UserE);
//       setLoading(true);
    
//       try {
//           const response = await axios.put(`http://localhost:5000/api/users/client/${id}`, UserE);
//           setInputs({
//               nameP: "",
//               email: "",
//               password: "",
//           });
    
//           setTimeout(() => {
//               setMessage("");
//               setLoading(false);
//               navigate('/LogIN')
//           }, 1500);
//       } catch (error) {
//           console.error(error);
//           setMessage("Hubo un error");
    
//           setTimeout(() => {
//               setMessage("");
//               setLoading(false);
//           }, 1500);
//       }
//     };

//     const navigate = useNavigate();

    const name =  JSON.parse(localStorage.getItem("name"));
    const gmail =  JSON.parse(localStorage.getItem("email"));

  return (
    <div className="profileU">
        <Link className='anchorProfileU' to="/Welcome"><img src="https://res.cloudinary.com/duldfbpwz/image/upload/v1680033024/Art%20Views/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_11_zrcujg.png"></img></Link>
        <div className='ContainerProfile1'>
            <img src = 'https://res.cloudinary.com/divor1sn5/image/upload/v1684162588/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_dokjns.png' className='imgProfile'></img>
        </div>
        <div className="ContainerProfile2">
            <div className="container2-0">
                <h1>{name}</h1>
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

        <Modal estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
        </Modal>

        {/* <h1>Al actualizar los datos se debe loguear de nuevo</h1>
        <form action='' className="form2Sing" onSubmit={(e) => onSubmit(e)}>

            <input onChange={(e) => onChange(e)} placeholder='Nombre de Usuario' name='name' type='text' id='nameUser' required />
            <input onChange={(e) => onChange(e)} placeholder='Contraseña' name='password' type='password' id='password' required />
            <input onChange={(e) => onChange(e)} placeholder='Correo' name='email' type='email' id='emailSing' required />

            <div className="containerbuttonSing">
                <button onSubmit={() => alert('funciona')}><span></span><p className="subPSing">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
            </div>
        </form> */}
    </div>
  )
}
