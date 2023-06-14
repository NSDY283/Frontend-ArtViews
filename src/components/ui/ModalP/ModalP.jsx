import React from 'react'
import axios from 'axios'
import './Modalp.css'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export const ModalP = ({estado, cambiarEstado, props}) => {

    const [inputs, setInputs] = useState({
        // email: "",
        nameP: "",
        img: "",
        category: "",
        price: 0,
        cant: 0,
        description: "",
        // nombreEmprendimiento: "",
        
    })
    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);

    
    // const {email,nameP,img,category,price,cant,description}= inputs;
    const {nameP,img,category,price,cant,description}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        // if (nameP !== '' && img !== '' && category !== '' && price !== '' && cant !== '' && description !== ''){
            const Product = {
                // email,
                nameP,
                img,
                category,
                price,
                cant,
                description,
            }
            // console.log(email1);
            console.log(Product);
            setLoading (true)
            await axios
            .post('https://backend-artviews.onrender.com/api/product/registerProduct', Product)
            .then (({data}) => {
                setMessage(data.message);
                // setInputs({email: `${email1}`,nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setInputs({nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setTimeout(()=>{
                    setMessage('')
                    navigate('/ProductsEmp')
                    setLoading(false)                
                    window.location.reload(true);
                },1500)
            })
            .catch((error)=>{
                console.error(error)
                setMessage('hubo un error')
                setTimeout(()=>{
                    setMessage("")
                    setLoading(false)
                },1500);
            });
        
    };
    
    const navigate = useNavigate();

  return (
    <>
    {estado && 
        <div className = "Overlay">
            <div className="ContenedorModalP">
                <button className="BotonCerrar" onClick={() => cambiarEstado(false)}>
                    X
                </button>
                <h1>Actualización producto</h1>

                <form action='' className="form2SingU" onSubmit={(e) => onSubmit(e,props.id)}>
                    <input onChange={(e) => onChange(e)} placeholder='Nombre Producto' name='nameP' type='text' id='nameUserP' required/>
                    <input onChange={(e) => onChange(e)} placeholder='URL de la Imagen' name='img' type='text' id='imgP' required/>
                    <input onChange={(e) => onChange(e)} placeholder='Categoria' name='category' type='text' id='categoryP' required/>
                    <input onChange={(e) => onChange(e)} placeholder='Precio' name='price' type='number' id='priceP' required/>
                    <input onChange={(e) => onChange(e)} placeholder='Cantidad' name='cant' type='number' id='cantP' required/>
                    <input onChange={(e) => onChange(e)} placeholder='Descripción' name='description' type='text' id='descriptionP' required/>

                    <button  className="btnAct3"onSubmit={() => alert('funciona')}><p className="btnAct">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
                </form>
            </div>
        </div>
    }
    </>
  )
}
