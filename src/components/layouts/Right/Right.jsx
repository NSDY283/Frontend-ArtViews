import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'

export const Right = () => {
  
  const name =  JSON.parse(localStorage.getItem("name"));
  const navigate = useNavigate();

  const RoutePages = () => {
    swal.fire({
      title: '¿Estas seguro?',
      text: "Procederas a la cerrar sesión",
      icon: 'warning',
      showCancelButton: true,
      customClass: 'my-sweetalert',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        navigate('/');
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: 'my-sweetalert',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          customClass: 'my-sweetalert',
          title: 'Cerró sesión con exito'
        })
      }
    })
  }


  return (
    <div className='Right'>
      <div className='perfil'>
        
        <nav className='navProfile'>
            <ul>
              <li><a href="#">
                <img className='arrowDown' src="https://res.cloudinary.com/divor1sn5/image/upload/v1684162785/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_2_rdnmxt.png" alt="" />
                <p>{name}</p>
                <img className='imgPerfil' src="https://res.cloudinary.com/divor1sn5/image/upload/v1684162588/Generales/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_dokjns.png" alt="" />
              </a>
              <ul>
                <li><Link className='anchorProfile' to="/MyprofileU">Mi Perfil</Link></li>
                <li><Link className='anchorProfile' onClick={()=>RoutePages()}>Cerrar Sesión</Link></li>
              </ul>
              </li>
            </ul>       
        </nav>
      
      
      </div>
      <p className="myPlan">
        Mi plan
      </p>

      <div className="plan">
        <p className="type">Emprende con Art Views</p>
        <p className="time">Prueba tu suerte con nosotros y ven al mundo del emprendimiento</p>
        <p className="exp">¿Que esperas para hacerlo?</p>
      </div>

      <p className='notifications'>Art Views</p>
      <div className="not">
        <p>{name} tienes una recomendacion nueva.</p>
        <p>Nuevos productos para explorar</p>
        <p>Hola {name}, Bienvenido a Art Views</p>
      </div>
    </div>
  )
}
