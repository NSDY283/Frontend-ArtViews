import React from 'react'
import '../AboutUS/AboutUS.css'
import { Link } from 'react-router-dom'

export const AboutUS = () => { 
  return(
    <div className='AboutUS'>
      <div className='headerAboutUs'>
        <Link className='anchorAboutUs' to="/"><img src="https://res.cloudinary.com/duldfbpwz/image/upload/v1680033024/Art%20Views/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_11_zrcujg.png"></img></Link>
      </div>
      <div className='containerAboutUs'>
        <div className='logoAboutUs'>
          <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1678999625/artViews/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_1_czjzbt.png"></img>
        </div>
        <div className='infoAboutUs'>
          <h1>Nuestra Historia</h1>
          <p>Nacimos de la idea de que muchos de los nuevos emprendimientos que surgen en el mercado no tienen acceso a herramientas y recursos para impulsar su crecimiento. Además, la mayoría de las soluciones existentes son costosas y difíciles de usar para los nuevos emprendedores, así que con el objetivo de ayudar a cerrar esta brecha, nos unimos para crear un aplicativo que brindara a los nuevos emprendimientos acceso a herramientas y recursos valiosos para apoyar su crecimiento y éxito.</p>
        </div>
      </div>
        <div className='containerMission'>
          <span className='imgMission'></span>
          <div className='mission'>
            <h2>Misión</h2>
            <p>Nuestra misión es proporcionar a los emprendedores una plataforma en línea que les permita tener acceso a recursos, herramientas y servicios que les ayuden a hacer crecer sus negocios. Contamos con la conexión de una red de mentores, expertos y otros emprendedores que puedan brindarles orientación y apoyo en su camino hacia el éxito empresarial.</p>
          </div>
        </div>
        <div className='containerVision'>
          <div className='vision'>
            <h2>Visión</h2>
            <p>Nuestra visión es Convertirnos en la plataforma líder y de referencia para los emprendedores en todo el mundo, proporcionándoles herramientas innovadoras y efectivas para hacer crecer sus negocios de manera sostenible y rentable.</p>
          </div>
          <span className='imgVision'></span>
        </div>
        <div className='containerObjective'>
        <span className='imgObjective'></span>
          <div className='objective'>
            <h2>Objetivo</h2>
            <p>El objetivo de nuestro aplicativo es facilitar el acceso a recursos y herramientas empresariales claves, proporcionar una red de apoyo, nuevas oportunidades de negocio, creatividad, nuevas ideas y crecimiento en el mundo empresarial.</p>
          </div>
        </div>
        <div className='containerScope'>
          <div className='scope'>
            <h2>Alcance</h2>
            <p>Nuestro alcance se estima que sea significativo, amplio y diverso, ya que brindamos una mano a los emprendedores donde no se necesitara tecnología avanzada para su uso, integrando comunidades que se apoyen entre si.</p>
          </div>
          <span className='imgScope'></span>
        </div>
        <div className='containerValuesAU'>
          <p className='titleValues'>Nuestros valores</p>
          <p className='p1AU'>PONER A NUESTROS MIEMBROS PRIMERO</p>
          <p className='p2AU'>JUNTOS LLEGAMOS LEJOS</p>
          <p className='p3AU'>SER EL MEJOR LUGAR PARA TRABAJAR</p>
          <p className='p4AU'>SIEMPRE SENTIR PASIÓN POR LO QUE HACEMOS</p>
        </div>
        <div className='footerAU'>

        </div>
    </div>
  )
}