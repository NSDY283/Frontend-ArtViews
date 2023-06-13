import React from 'react'
import {Main} from '../../layouts/Main/MainHome'
import {Header} from '../../layouts/Header/Header'
import '../../pages/Home/Home.css'
import { ContainerValues } from '../../layouts/ContainerValues/ContainerValues'
import { Container2Home } from '../../ui/Container2Home/Container2Home'
import { ContainerPlane } from '../../layouts/ContainerPlane/ContainerPlane'

export const Home = () => {
  
  return (
    <div className="home">
      <Header/>
      <Main/>

      <div className="contentp1Home">
        <p className="p1Home">Registrate ahora y conoce los beneficios de ser parte de la comunidad ART VIEWS</p>
      </div>

      <ContainerValues/>
      <Container2Home/>
      <ContainerPlane/>

      <div className="footerHome">
        
      </div>

    </div>
  )
}
