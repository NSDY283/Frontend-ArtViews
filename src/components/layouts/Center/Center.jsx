import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router';
import axios from 'axios'

export const Center = () => {
  const navigate = useNavigate()

  const name =  JSON.parse(localStorage.getItem("name"));

  return (
    <div className='Center'>
      <p className='hola'>Hola!, {name}</p>
      <p className='empieza'>Empieza a descubrir</p>
      <div className='container3'>
        <img className='image2' src="" alt="" />
        <button className='more'>Conoce mas</button>
      </div>
      <p className="productsRecent">
        Productos recientes
      </p>

      <div className="container4">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
