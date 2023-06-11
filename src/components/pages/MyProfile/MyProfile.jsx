import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CreateCardUsCli } from '../../ui/CreateCard/CreateCardUsCli'

export const MyProfile = () => {

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
      {products.map((product) => {
        return <CreateCardUsCli img={product.img} name={product.nameP} price={product.price} desciption={product.description} />
        })}
    </div>
  );}
