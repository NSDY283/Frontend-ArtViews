import React from 'react'

export const CreateCardUsCli = (props) => {
  return (
    <div className="containerProducts2">
      <img className="imgProduct"src={props.img} alt="" />
      <p className='nameProduct'>{props.name}</p>
      <p className="priceProduct">{props.price}</p>
      <p className='description'>{props.desciption}</p>
    </div>
  )
}
