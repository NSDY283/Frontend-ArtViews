import React from "react";
import {Route, Routes } from "react-router-dom";
import { Home } from "../src/components/pages/Home/Home.jsx";
import { AboutUS } from "./components/pages/AboutUS/AboutUS.jsx";
import { SingUP } from "./components/pages/SingUP/SingUP.jsx";
import { LogIN } from "./components/pages/LogIN/LogIN.jsx";
import { SingUPE } from "./components/pages/SingUPE/SingUPE.jsx";
import { Welcome } from "./components/pages/Welcome/welcome.jsx";
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
          <Route path='/me' element={<Welcome/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
