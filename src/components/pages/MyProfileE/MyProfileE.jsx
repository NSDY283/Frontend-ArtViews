import React from 'react'
import { useState } from 'react'
import './MyProfileE.css'
import { Link } from 'react-router-dom'
import { ModalE } from '../../ui/ModalE/ModalE'


export const MyProfileE = () => {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    

    const name =  JSON.parse(localStorage.getItem("name"));
    const gmail =  JSON.parse(localStorage.getItem("email"));

  return (
    <div className="profileE">
        <Link className='anchorProfileE' to="/WelcomeEmp"><img src="https://res.cloudinary.com/duldfbpwz/image/upload/v1680033024/Art%20Views/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_11_zrcujg.png"></img></Link>
        <div className='ContainerProfileE1'>
            <img src = 'https://res.cloudinary.com/divor1sn5/image/upload/v1683916730/Emprendimientos/sweetmarine__/294137082_5754021084617702_3183418268585916900_n_khd3ot.jpg' className='imgProfileE'></img>
        </div>
        <div className="ContainerProfileE2">
            <div className="containerE2-0">
                <h1>{name}</h1>
                <p>{gmail}</p>
                <p>Un emprendimiento basado en productos hechos a mano, apoyando el arte y la diversidad de este.</p>

            </div>
            <div className="containerE2-1">
                <button className= "btnActuE"onClick={() => cambiarEstadoModal1(!estadoModal1)}>Actualizar datos</button>
                <div className="desplegableE">
                    <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686638138/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_3_xpexpq.png" alt="" />
                </div>
            </div>
        </div>

        <ModalE estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
        </ModalE>
    </div>
  )
}
