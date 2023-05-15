import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router';
import '../Welcome/welcome.css'
import { Left } from '../../layouts/Left/Left';
import { Center } from '../../layouts/Center/Center'
import { Right } from '../../layouts/Right/Right'
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
  // <h2>{name ? "Bien" : "mal..."}</h2>

  return (
    <div className='Welcome'>
    <Left/>
    <Center/>
    <Right/>
    </div>
  )
}
