import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const CreateCard = (props) => {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
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

const onSubmit = async (e, id) => {
  e.preventDefault();

  const Product = {
      nameP,
      img,
      category,
      price,
      cant,
      description,
  };

  console.log(Product);
  setLoading(true);

  try {
      const response = await axios.put(`https://backend-artviews.onrender.com/api/product/${id}`, Product);
      setInputs({
          nameP: "",
          img: "",
          category: "",
          price: "",
          cant: "",
          description: "",
      });

      setTimeout(() => {
          setMessage("");
          setLoading(false);
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

  const deleteProduct = async (id) => {
    try {
        console.log(id)
        await axios.delete("https://backend-artviews.onrender.com/api/product/"+id);
        window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="containerProducts">
      <button  className="btnDelete"onClick={()=>deleteProduct(props.id)}>X</button>
      <img className="imgProduct" src={props.img} alt=""></img>
      <p className='nameProduct'>{props.name}</p>
      <p className='priceProduct'>{props.price}</p>
      <p className='description'>{props.desciption}</p>

      <button  className="btnModalP" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
        <img className="imgModalPencil" src="https://res.cloudinary.com/divor1sn5/image/upload/v1686716241/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_8_vkefr6.png" alt="" />
      </button>


      <div estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>

      {estadoModal1 && 
        <div className = "Overlay">
            <div className="ContenedorModal">
                <button className="BotonCerrar" onClick={() => cambiarEstadoModal1(false)}>
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

                    <button  className="btnActu3"onSubmit={() => alert('funciona')}><p className="btnAct">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
                </form>
            </div>
        </div>
    }
    </div>
    </div>
  )
}
