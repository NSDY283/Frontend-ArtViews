import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Welcome/welcome.css'
import { Left } from '../../layouts/Left/Left';
import { Center } from '../../layouts/Center/Center'
import { Right } from '../../layouts/Right/Right'
import axios from 'axios'
import { useSelector } from 'react-redux'


export const Welcome = () => {
  // const [name, setName] = useState();
  
  // const {user} = useSelector((state) => state.auth)

  const navigate = useNavigate()

  // const token =  JSON.parse(localStorage.getItem("token"));
  const name =  JSON.parse(localStorage.getItem("name"));

  // useEffect(() => {
  //   if (token){
  //     axios
  //       .get(`http://localhost:5000/api/users/me`)
  //       .then((res) => {const {data} = res; setTimeout(()=>{console.log(data.name)})})
  //       .catch(( error ) => console.error(error))
  //   }
  // },[token])

  return (
    <div className='Welcome'>
    {/* <h2>{user && user.name ? "Bien" : "mal..."}</h2> */}
    <Left/>
    <Center/>
    <Right/>
    </div>
  )
  }