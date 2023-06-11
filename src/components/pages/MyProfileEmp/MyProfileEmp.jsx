import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Products } from '../../ui/Products/Products'
import {  useNavigate } from 'react-router-dom'
export const MyProfileEmp = () => {
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
            .post('http://localhost:5000/api/product/registerProduct', Product)
            .then (({data}) => {
                setMessage(data.message);
                // setInputs({email: `${email1}`,nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setInputs({nameP: "",img: "",category: "",price: 0,cant: 0,description: "",});
                setTimeout(()=>{
                    setMessage('')
                    navigate('/MyProfileEmp')
                    setLoading(false)                
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

    // const getP = async()=>{
    //     const Product = {
    //         // email,
    //         nameP,
    //         img,
    //         price,
    //         description,
    //     }

    //     // const [img1, setImg] = useState()
    //     // const [nameP1, setName] = useState()
    //     // const [price1, setPrice] = useState()
    //     // const [description1, setDescription] = useState()
    //     const [messag1e, setMessag1e]=useState();

    //     const response = await axios.get("http://localhost:5000/api/product/getProduct", Product)
    //     console.log(response.data.map ((element)=>{console.log(element.nameP)}))
    
    // }

  return (
    <div className="formSingE">
        <form action='' className="form2SingE" onSubmit={(e) => onSubmit(e)}>
            <div className='headerContactSingE'>
                <h3>Bienvenido</h3>
                <p>¿Ya tienes cuenta?
                    <Link to='/LogIN' className="anchorLOGE">Iniciar Sesión</Link>
                </p>
            </div>

            <input onChange={(e) => onChange(e)} placeholder='Producto' name='nameP' type='text' id='nameUserE' required />
            <input onChange={(e) => onChange(e)} placeholder='imagen' name='img' type='text' id='img' required />
            <input onChange={(e) => onChange(e)} placeholder='category' name='category' type='text' id='category' required />
            <input onChange={(e) => onChange(e)} placeholder='precio' name='price' type='number' id='price' required />
            <input onChange={(e) => onChange(e)} placeholder='cantidad' name='cant' type='number' id='cant' required />
            <input onChange={(e) => onChange(e)} placeholder='Descripcion' name='description' type='text' id='description' required />

            <div>
                <button onSubmit={() => alert('funciona')}><span></span><p className="subPSingE">{loading ? 'Cargando...' : 'Ingresar'}</p></button>
            </div>
        </form>

        <div className="containerProducts" >
            <h1>s</h1>
            <h1>d</h1>
            <Products/>
        </div>

    </div>
  )
}

