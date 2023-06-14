import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CreateCard } from '../CreateCard/CreateCard'

export const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://backend-artviews.onrender.com/api/product/getProduct");
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
    <div className='containerCreateCard'>
      {products.map((product) => {
        return <CreateCard id={product._id} img={product.img} name={product.nameP} price={product.price} desciption={product.description} category={product.category} cant={product.cant}/>
        })}
    </div>
  );}