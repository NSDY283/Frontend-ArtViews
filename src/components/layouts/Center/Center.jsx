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
      <img className='image2' src="https://res.cloudinary.com/divor1sn5/image/upload/v1684105239/Generales/Bienvenido_Nuevamente_ftej7s.jpg" alt="" />
    </div>
  )
}
