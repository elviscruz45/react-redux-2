import React from "react"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Menu } from "./Menu"
import  Usuarios  from "./Usuarios"
import  Publicaciones  from "./Publicaciones"
import Tareas from "./Tareas"


const App = ()=>(
  <>
  
  <BrowserRouter>
  <Menu/>
  <div  className="margen">

  <Routes>
      <Route path="/" element={<Usuarios/>}/>
      <Route path="/tareas" element={<Tareas/>}/>
      <Route path="/publicaciones/:key" element={<Publicaciones/>} />
  </Routes>
  </div>

    </BrowserRouter>
  </>
)


export {App}

