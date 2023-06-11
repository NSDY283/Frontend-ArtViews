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

  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product/getProduct");
        const productsData = response.data;
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        console.log(error);
      }
    };
  
    getProducts();
    console.log(products);
  }, []);
  
  return (
    <div>
      {products.map((product) => (
        // cardproduct
        // title = 
        <h1 className='nameProduct'>{product?.nameP}</h1>
      ))}
    </div>
  );}