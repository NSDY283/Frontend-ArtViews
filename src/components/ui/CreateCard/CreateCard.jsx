import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ModalP } from '../../ui/ModalP/ModalP'

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
      <img className="imgProduct" src={props.img} alt="" />
      <p className='nameProduct'>{props.name}</p>
      <p className='priceProduct'>{props.price}</p>
      <p className='description'>{props.desciption}</p>

      <button  className="btnModalP" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
        <img src="" alt="" />
      </button>


      
        <ModalP estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
        </ModalP>
    </div>
  )
}
