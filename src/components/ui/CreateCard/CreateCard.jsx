import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const CreateCard = (props) => {

  
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
      const response = await axios.put(`http://localhost:5000/api/product/${id}`, Product);
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
        await axios.delete("http://localhost:5000/api/product/"+id);
        window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="containerProducts">
      <button onClick={()=>deleteProduct(props.id)}>X</button>
      <img className="imgProduct" src={props.img} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <p>{props.desciption}</p>

      <form action='' className="form2SingE" onSubmit={(e) => onSubmit(e,props.id)}>
            <input onChange={(e) => onChange(e)} placeholder='Producto' name='nameP' type='text' id='nameUserE' required/>
            <input onChange={(e) => onChange(e)} placeholder='Imagen' name='img' type='text' id='img' required/>
            <input onChange={(e) => onChange(e)} placeholder='Categoria' name='category' type='text' id='category' required/>
            <input onChange={(e) => onChange(e)} placeholder='Precio' name='price' type='number' id='price' required/>
            <input onChange={(e) => onChange(e)} placeholder='Cantidad' name='cant' type='number' id='cant' required/>
            <input onChange={(e) => onChange(e)} placeholder='Descripcion' name='description' type='text' id='description' required/>

            <div>
                <button onSubmit={() => alert('funciona')}><span></span><p className="subPSingE">{loading ? 'Cargando...' : 'Actualizar'}</p></button>
            </div>
        </form>
    </div>
  )
}
