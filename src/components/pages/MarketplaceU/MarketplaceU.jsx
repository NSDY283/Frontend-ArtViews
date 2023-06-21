import React, { useEffect, useState } from 'react'
// import "../Marketplace/Marketplace.css"
import axios from 'axios'
import { CreateCardUsCli } from '../../ui/CreateCard/CreateCardUsCli'
import { Left } from '../../layouts/Left/Left';

export const MarketplaceU = (estado, cambiarEstado) => {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [countProducts, setCountProducts] = useState(0);
  const [active, setActive] = useState(false);

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


  const onAddproduct = products => {
    setAllProducts([...allProducts, products]);
  };
  console.log(allProducts);
  
  return (
    <div className='MarketPlace'>
    <Left/>
    <div className="containerProductsMarketPlace">

      <div className="containerTotalCards">
      <div className="headerMarket">
        <div onClick={() => cambiarEstadoModal1(!estadoModal1)} className="containerImg">
          <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686719914/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_9_ugtuv3.png" alt="" />
        </div>
      </div>

    <div estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
    {estadoModal1 && 
        <div className = "Overlay">
            <div className="ContenedorModalM">

                <button className="BotonCerrar" onClick={() => cambiarEstadoModal1(false)}>
                    X
                </button>

                <div className="containerCarritoProucts">
                  <div className='divCard'>
                      {allProducts.map((products) => {
                        return (<div className='containerCreateCardUsCli'><CreateCardUsCli img={products.img} name={products.nameP} price={products.price}  /></div>
                        )})}
                        
                    </div>
                </div>
        <div className="footerCarrito">
              <button className='btnVaciar'>Vaciar bolsa</button>
              <button className='btnVaciar'>Comprar</button>
            </div>
            </div>
        </div>
    }
    </div>

          <div className='containerCardProducts'>
            {products.map((product) => {
              return (
              <div className='CreateCardUsCli2'>
              <CreateCardUsCli img={product.img} name={product.nameP} price={product.price} desciption={product.description} />
              <button className="btnComprar" onClick={() => onAddproduct(product)}>+</button>
              </div>
              )})}
          </div>

          </div>
        </div>
    </div>
    )}
