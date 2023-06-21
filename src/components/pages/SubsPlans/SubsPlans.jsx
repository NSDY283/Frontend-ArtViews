import React from 'react'
import "../SubsPlans/SubsPlans.css"
import { Link } from 'react-router-dom'

export const SubsPlans = () => {
  return (
    <div className='SubsPlans'>
        <div className='headerAboutUs'>
          <Link className='anchorAboutUs2' to="/WelcomeEmp"><img src="https://res.cloudinary.com/divor1sn5/image/upload/v1687317340/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_10_rusm3c.png"></img></Link>
        </div>
        <p className="plansP">Planes de subscripción</p>
        <div className="ContainerPlans">
            <div className="Plan1">
                <p className="titlePlan">Principiante</p>
                <div className="contPricePlan">
                    <p className="signPlan">$</p>
                    <p className="pricePlan1">32</p>
                    <p className="pricePlan2">.000</p>
                </div>
                <p className="containPlan">10 horas mensuales de tutorías "aprendiendo a emprender". <br/><br/> Acceso a líneas de ayuda exclusivas, chat en vivo o asistencia personalizada.</p>
                <button className='btnPlan'>Adquirir plan</button>
            </div>
            <div className="Plan2">
                <p className="titlePlan">Premium</p>
                <div className="contPricePlan">
                    <p className="signPlan">$</p>
                    <p className="pricePlan1">48</p>
                    <p className="pricePlan2">.000</p>
                </div>
                <p className="containPlan">20 horas mensuales de tutorías "emprendimiento progresivo". <br/><br/> Acceso a líneas de ayuda exclusivas, chat en vivo o asistencia personalizada.<br/><br/>funciones para administrar tus finanzas y planificar el crecimiento de tu emprendimiento.</p>
                <button className='btnPlan'>Adquirir plan</button>
            </div>
            <div className="Plan3">
            <p className="titlePlan">Profesional</p>
                <div className="contPricePlan">
                    <p className="signPlan">$</p>
                    <p className="pricePlan1">86</p>
                    <p className="pricePlan2">.000</p>
                </div>
                <p className="containPlan">20 horas mensuales de tutorías "Finanzas y  ventas". <br/><br/>20 horas mensuales de tutorías "Servicio al cliente".<br/><br/>Acceso a líneas de ayuda exclusivas, chat en vivo o asistencia personalizada.<br/><br/>Funciones para administrar tus finanzas y planificar el crecimiento de tu emprendimiento.</p>
                <button className='btnPlan'>Adquirir plan</button>
            </div>
        </div>
    </div>
  )
}
