import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const CreateCardAdmin = (props) => {

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
      <button onClick={()=>deleteProduct(props.id)}>X</button>
      <img className="imgProduct" src={props.img} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <p>{props.desciption}</p>
    </div>
  )
}
