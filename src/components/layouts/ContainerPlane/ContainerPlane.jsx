import React from 'react'
import { Link } from 'react-router-dom'

export const ContainerPlane = () => {
  return (
    <div className="ContainerPlane">
        <div className="Plan1h">
            <p className="titlePlanh">Principiante</p> 
            <div className="contPricePlanh">
              <p className="signPlanh">$</p>
              <p className="pricePlan1h">32</p>
              <p className="pricePlan2h">.000</p>
            </div>
            <p className="containPlan">Perfecto para dar a conocer tu emprendimiento y enseñarlo al mundo</p>

            <button className="btnPlan"><Link className='anchorPlans' to="/SubsPlans2">Conoce más</Link></button>
        </div>
        <div className="Plan2h">
        <p className="titlePlanh">Premium</p> 
            <div className="contPricePlanh">
              <p className="signPlanh">$</p>
              <p className="pricePlan1h">48</p>
              <p className="pricePlan2h">.000</p>
            </div>
            <p className="containPlan">Empieza a desarrollar tus habilidades como emprendedor, destaca en lo que haces y empieza a tener poder de marca </p>

            <button className="btnPlan"><Link className='anchorPlans' to="/SubsPlans2">Conoce más</Link></button>
        </div>
        <div className="Plan3h">
        <p className="titlePlanh">Profesional</p> 
            <div className="contPricePlanh">
              <p className="signPlanh">$</p>
              <p className="pricePlan1h">86</p>
              <p className="pricePlan2h">.000</p>
            </div>
            <p className="containPlan">Fortalece tus conocimientos de empresa y empieza a tener un control de tus finanzas y ventas</p>

            <button className="btnPlan"><Link className='anchorPlans' to="/SubsPlans2">Conoce más</Link></button>
        </div>
    </div>
  )
}
