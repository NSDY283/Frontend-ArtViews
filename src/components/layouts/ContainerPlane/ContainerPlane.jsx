import React from 'react'

export const ContainerPlane = () => {
  return (
    <div className="ContainerPlane">
        <div className="plane1">
            <p className="p1CP">Principiante</p> 
            <p className="p2CP">48.000 COP</p>
            <p className="p3CP">o 10 USD</p>
            <p className="p4CP">Perfecto para dar a conocer tu emprendimiento y enseñarlo al mundo</p>

            <button className="btnCP">Conoce mas</button>
        </div>
        <div className="plane2">
            <p className="p1CP">Experto</p> 
            <p className="p2CP">152.000 COP</p>
            <p className="p3CP">o 32 USD</p>
            <p className="p4CP">Perfecto para emprendimientos grandes o empresas profesionales</p>

            <button className="btnCP2">Conoce mas</button>
        </div>
    </div>
  )
}
