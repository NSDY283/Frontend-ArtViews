import React from 'react'

export const CreateCard = (props) => {
  return (
    <div className="containerProducts">
      <button>X</button>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <p>{props.desciption}</p>
    </div>
  )
}
