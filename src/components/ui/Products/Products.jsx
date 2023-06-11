import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Products = () => {

  const [inputs, setInputs] = useState({

    nameP1: "",
    img1: "",
    price1: 0,
    description1: "",

  })
  
  // const {nameP,img,price,description}= inputs;

  // const Product = {
  //     // email,
  //     nameP,
  //     img,
  //     price,
  //     description,
  //   }

  // const getInformation =  async()=>{
  //   const response = await axios.get("http://localhost:5000/api/product/getProduct", Product)

  //   response.data.map ((element)=>{
  //     setInputs({nameP:element.nameP,img:element.img,price:element.price,description:element.description})
  //     })
  //     console.log(response.data)
  //   return response
  // }

  
    const [products, setProducts] = useState([])
    useEffect (() =>{
      axios.get("http://localhost:5000/api/product/getProduct")
      .then(products => {
        setProducts(products.data)})
      .catch(err => console.log(err))
      }, [])
      
      
      return (
        <div>
      {
        products.map(pro => {
          console.log (pro.nameP)
          // <h1 className='nameProduct'>{pro.nameP}</h1>
        })
      }
    </div>
  )
}