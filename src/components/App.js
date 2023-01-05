import React from "react"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Menu } from "./Menu"
import  Usuarios  from "./Usuarios"
import  Publicaciones  from "./Publicaciones"
import Tareas from "./Tareas"
import TareasGuardar from "./Tareas/Guardar"


const App = ()=>(
  <>
  
  <BrowserRouter>
  <Menu/>
  <div  className="margen">

  <Routes>
      <Route path="/" element={<Usuarios/>}/>
      <Route path="/tareas" element={<Tareas/>}/>
      <Route path="/publicaciones/:key" element={<Publicaciones/>} />
      <Route path="/tareas/guardar" element={<TareasGuardar/>}/>
      <Route path="/tareas/guardar/:usu_id/:tar_id" element={<TareasGuardar/>}/>

  </Routes>
  </div>

    </BrowserRouter>
  </>
)


export {App}

