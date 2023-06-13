import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CreateCardUsCli } from '../../ui/CreateCard/CreateCardUsCli'
import { LeftE } from '../../layouts/LeftE/LeftE';
import "./MarketPlace.css"

export const Marketplace = () => {

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [countProducts, setCountProducts] = useState(0);
  const [active, setActive] = useState(false);

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

  // const ClothesProduct = async () => {
  //   try{
  //     await axios.get("http://localhost:5000/api/product/getProduct");  

  //     products.map(product) => {
        
  //   }
  // }

  const onAddproduct = products => {
    // if(allProducts.find(props => props.id === allProducts._id)){
    //   const products1= allProducts.map(props => props.id === allProducts._id 
    //     ?{...props, quantity: props.quantity +1 }
    //     : props
    //   );
    //   setCountProducts(countProducts + allProducts.quantity)
    //   return setAllProducts([...products1])
    // }
    // setTotal(total + products.price)
    // setCountProducts(countProducts + allProducts.quantity)
    setAllProducts([...allProducts, products]);
  };
  console.log(allProducts);
  
  return (
  <div className='MarketPlace'>
    <LeftE/>
    <div className="containerProductsMarketPlace">

    <div>
      <h2>Total:</h2>
      {/* <h3>${total}</h3> */}
    </div>
    <div>
            <p id="contador">0</p>
            <button onClick={() => setActive(!active)}>bolsa</button>
    </div>

  {/* <div className={`container-cart-products ${active ? '' : 'hodden-cart'}`}> */}
  <div className='divCard'>
      {allProducts.map((products) => {
        return (<div className='containerCreateCardUsCli'><CreateCardUsCli img={products.img} name={products.nameP} price={products.price}  /></div>
        )})}
        {/* <span className='contadorCar'>{product.quantity}</span> */}
        {/* <span>${quantity}</span> */}
         <button>vaciar bolsa</button>
    </div>


            {/* <div>
                <select name="filter" id="filter">
                <option value="">Categorias</option>
                <option onClick={()=>clothesProduct} value="">Ropa</option>
                <option onClick={()=>AccessoriesProduct} value="">Accesorios</option>
                <option onClick={()=>HouseUtensilsProduct} value="">Utensilios de casa</option>
                </select>
              </div> */}
          <div className='containerCardProducts'>
            {products.map((product) => {
              return (
              <div className='CreateCardUsCli2'>
              <CreateCardUsCli img={product.img} name={product.nameP} price={product.price} desciption={product.description} />
              <button className="btnComprar"onClick={() => onAddproduct(product)}>+</button>
              </div>
              )})}
          </div>
        </div>
    </div>
    )}
