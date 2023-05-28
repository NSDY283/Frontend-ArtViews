// import React from 'react'
// import axios from 'axios'
// import {  useNavigate } from 'react-router-dom'


// export const ValidationU = async (Usuario) => {
    
//     const navigate = useNavigate();
    
    
//     axios.post('http://localhost:5000/api/users/login', Usuario)
//     .then ((res) => {
//         const {data} = res;
//         // setMessage(data.message);
//         setTimeout(()=>{
//             // setMessage('')
//             // console.log(data.token)
//             localStorage.setItem("token",  JSON.stringify(data.token));
//             localStorage.setItem("name",  JSON.stringify(data.name));
//             // localStorage.setItem("usuario",  JSON.stringify(Usuario));
//             navigate('/me')
//         },1500)
//     })
//     .catch((error)=>{
//         console.error(error)
//         // setMessage('corrreo o contraseña incorrecto')
//         setTimeout(()=>{
//             // setMessage("")
//         },1500);
//     });
// }

// export const ValidationE = async (Usuario) => {
    
//     const navigate = useNavigate();
//     axios.post('http://localhost:5000/api/userE/registerUserE', Usuario)
//     .then ((res) => {
//         const {data} = res;
//         // setMessage(data.message);
//         setTimeout(()=>{
//             // setMessage('')
//             // console.log(data.token)
//             localStorage.setItem("token",  JSON.stringify(data.token));
//             localStorage.setItem("name",  JSON.stringify(data.name));
//             // localStorage.setItem("usuario",  JSON.stringify(Usuario));
//             navigate('/me')
//         },1500)
//     })
//     .catch((error)=>{
//         console.error(error)
//         // setMessage('corrreo o contraseña incorrecto')
//         setTimeout(()=>{
//             // setMessage("")
//         },1500);
//     });
// }
