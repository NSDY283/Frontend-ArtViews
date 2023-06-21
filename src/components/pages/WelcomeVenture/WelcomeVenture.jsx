import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { ProductsAdmin } from '../../ui/Products/ProductsAdmin'
import {  useNavigate } from 'react-router-dom'
import "./WelcomeVenture.css"

export const WelcomeVenture = () => {

  return (
    <div className="ContainerAdmin">
            <ProductsAdmin/>
    </div>
  )
}

