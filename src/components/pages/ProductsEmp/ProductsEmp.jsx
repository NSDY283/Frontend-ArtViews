import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Products } from '../../ui/Products/Products'
import {  useNavigate } from 'react-router-dom'
import { LeftE } from '../../layouts/LeftE/LeftE'
import swal from 'sweetalert2'

export const ProductsEmp = () => {
    const email1 =  JSON.parse(localStorage.getItem("email"));
    const [inputs, setInputs] = useState({
        nameP: "",
        img: "",
        category: "",
        price: 0,
        cant: 0,
        description: "",
        
    })
    const [email, setEmail] = useState(email1)
    const [message, setMessage]=useState();
    const [loading, setLoading]=useState(false);

    
    const {nameP,img,category,price,cant,description}= inputs;
    
    const onChange = (e)=> {
        setInputs({ ...inputs, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
       const Product = {
                email,
                nameP,
                img,
                category,
                price,
                cant,
                description,
            }
            console.log(Product);
            setLoading (true)
            await axios
            .post('https://backend-artviews.onrender.com/api/product/registerProduct', Product)
            .then (({data}) => {
                setMessage(data.message);
                // setInputs({email: email1,nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setInputs({nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setTimeout(()=>{
                    setMessage('')
                    navigate('/ProductsEmp')
                    setLoading(false)                
                },1500)
                swal.fire({
                    title: 'Producto agregado con exito',
                    icon: "success",
                    showCancelButton: false,
                    customClass: 'my-sweetalert',
                    confirmButtonText: 'Aceptar',
                    preConfirm: () => {
                    window.location.reload(true);
                  }
                });
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
    <div className="conatinercard2">
            <LeftE/>
        <div className="containercard2-0">
            <form action='' className="containercard3" onSubmit={(e) => onSubmit(e)}>
            
            <div className="containerForm1">
                <input onChange={(e) => onChange(e)} placeholder='Nombre producto' name='nameP' type='text' id='nameUserP1' required />
                <input onChange={(e) => onChange(e)} placeholder='categoria' name='category' type='text' id='categoryP1' required />
                <input onChange={(e) => onChange(e)} placeholder='Descripción' name='description' type='text' id='descriptionP1' required />
            </div>
            <div className="containerForm2">
                <input onChange={(e) => onChange(e)} placeholder='URL imagen' name='img' type='text' id='imgP1' required />
                <input onChange={(e) => onChange(e)} placeholder='precio' name='price' type='number' id='priceP1' required />
                <input onChange={(e) => onChange(e)} placeholder='cantidad' name='cant' type='number' id='cantP1' required />
                <button className="btnIngr"onSubmit={() => alert('funciona')}><p className="subPSingE">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>


            </form>

            <div>
                <Products/>
            </div>
        </div>
    </div>
  )
}

