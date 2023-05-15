import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router';
import axios from 'axios'

export const Right = () => {
  const navigate = useNavigate()

  const name =  JSON.parse(localStorage.getItem("name"));

  return (
    <div className='Right'>
      <div className='perfil'>
        <img className='imgPerfil' src="https://res.cloudinary.com/divor1sn5/image/upload/v1684162588/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_dokjns.png" alt="" />
        <p>{name}</p>
        <img className='arrowDown' src="https://res.cloudinary.com/divor1sn5/image/upload/v1684162785/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_2_rdnmxt.png" alt="" />
      </div>
      <p className="myPlan">
        Mi plan
      </p>

      <div className="plan">
        <p className="type">Plan profesional</p>
        <p className="time">Art Views plan 12 meses.</p>
        <p className="exp">Valido hasta 12/09/2023</p>
      </div>

      <p className='notifications'>Notificaciones</p>
      <div className="not">
        <p>{name} Tienes una recomendacion nueva</p>
        <p>Nuevos productos para explorar</p>
        <p>Hola {name} Bienvenido a Art Views</p>
      </div>
    </div>
  )
}
