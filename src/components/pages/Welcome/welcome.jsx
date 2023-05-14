import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router';
import axios from 'axios'

export const Welcome = () => {
  // const [name, setName] = useState();

  const navigate = useNavigate()

  // const token =  JSON.parse(localStorage.getItem("token"));
  const name =  JSON.parse(localStorage.getItem("name"));

  // useEffect(() => {
  //   if (token){
  //     axios
  //       .get(`http://localhost:5000/api/users/me`, {headers: {token: token,},})
  //       .then(({ data }) => setName(data.name))
  //       .catch(( error ) => console.error(error))
  //   }
  // },[token])

  return (
    <>
    <div>welcome {name}</div>
    <h2>{name ? "Bien" : "mal..."}</h2>
    </>
  )
}
