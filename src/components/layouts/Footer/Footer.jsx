import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container1Footer">
            <div className="part1Footer">
                <h2>Información</h2>
                <Link className='anchorF' to="/">Inicio</Link>
                <Link className='anchorF' to="/AboutUS">Sobre nosotros</Link>
            </div>
            <div className="part2Footer">
                <h2>Contacto</h2>
                <p className='anchorF'>artviews@gmail.com</p>
                <p className='anchorF'>+57 316 739 64 82</p>
            </div>
            <div className="part3Footer">
                <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686713740/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_5_kje15i.png" alt="" />
                <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686713741/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_6_uq59sq.png" alt="" />
                <img src="https://res.cloudinary.com/divor1sn5/image/upload/v1686713741/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_7_rrdvsb.png" alt="" />
            </div>
        </div>
        <div className="container2Footer">
            <div className="part4Footer">
                <p>Nicol Alexandra Trejos Orozco</p>
                <p>Yuly Tatiana Gallego Arredondo</p>
            </div>
            <div className="part5Footer">
                <p>Sharith Valbuena Florez</p>
                <p>Daniel Mauricio Villa Patiño</p>
            </div>
        </div>
    </div>
  )
}
