import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Products } from '../../ui/Products/Products'
import {  useNavigate } from 'react-router-dom'
import { LeftE } from '../../layouts/LeftE/LeftE'
import swal from 'sweetalert'

export const ProductsEmp = () => {
    // const email1 =  JSON.parse(localStorage.getItem("email"));
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
                swal({
                    title: "Producto Creado",
                    icon: "success",
                    timer: "1500",
                    buttons: false
                    // icon: "warning" error naranja
                    // icon: "info" error sin color 
                    // icon: "error" error con una x 
                  })
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

