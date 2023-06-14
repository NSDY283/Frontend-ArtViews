import React from "react";
import {Route, Routes } from "react-router-dom";
import { Home } from "../src/components/pages/Home/Home.jsx";
import { AboutUS } from "./components/pages/AboutUS/AboutUS.jsx";
import { SingUP } from "./components/pages/SingUP/SingUP.jsx";
import { LogIN } from "./components/pages/LogIN/LogIN.jsx";
import { SingUPE } from "./components/pages/SingUPE/SingUPE.jsx";
import { WelcomeEmp } from "./components/pages/WelcomeEmprendedor/WelcomeEmp.jsx";
import { Welcome } from "./components/pages/Welcome/welcome.jsx";
import { Marketplace } from "./components/pages/Marketplace/Marketplace.jsx"
import { MarketplaceU } from "./components/pages/MarketplaceU/MarketplaceU.jsx"
import { ProductsEmp } from "./components/pages/ProductsEmp/ProductsEmp.jsx"
import { MyProfileU } from "./components/pages/MyProfileU/MyProfileU.jsx"
import { MyProfileE } from "./components/pages/MyProfileE/MyProfileE.jsx"
import { WelcomeVenture } from "./components/pages/WelcomeVenture/WelcomeVenture.jsx";
window.addEventListener('DOMContentLoaded',App)

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/AboutUS' element={<AboutUS/>}></Route>
          <Route path='/SingUP' element={<SingUP/>}></Route>
          <Route path='/LogIN' element={<LogIN/>}></Route>
          <Route path='/SingUPE' element={<SingUPE/>}></Route>
          <Route path='/Welcome' element={<Welcome/>}></Route>
          <Route path='/WelcomeEmp' element={<WelcomeEmp/>}></Route>
          <Route path='/Marketplace' element={<Marketplace/>}></Route>
          <Route path='/MarketplaceU' element={<MarketplaceU/>}></Route>
          <Route path='/ProductsEmp' element={<ProductsEmp/>}></Route>
          <Route path='/MyprofileU' element={<MyProfileU/>}></Route>
          <Route path='/MyprofileE' element={<MyProfileE/>}></Route>
          <Route path='/WelcomeVenture' element={<WelcomeVenture/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
