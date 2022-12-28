import React ,{useEffect} from "react"
import { useParams } from "react-router-dom"
import {connect} from "react-redux"
import * as usuariosActions from "../../actions/usuariosActions"
import * as publicacionesActions from "../../actions/publicacionesActions"

const {traerTodos:usuariosTraerTodos}=usuariosActions
const {traerPorUsuario:publicacionesTraerPorUsuario}=publicacionesActions

const Publicaciones=(props)=>  {
    const {key}=useParams()

    useEffect(()=>{
        async function fetchData(){
        if(!props.usuariosReductor.usuarios.length){
            //console.log(key)
             await props.usuariosTraerTodos()
        }

        props.publicacionesTraerPorUsuario(key)
        }

        fetchData()
        console.log(props)

    },[])
        return <div>
            
            <h1>
                Publicaciones des
            </h1>
            {key}
        </div>
}


const mapStateToProps=({usuariosReductor,publicacionesReductor})=>{
    return {
        usuariosReductor,
        publicacionesReductor
    }
}

const mapDispatchToProps={
    usuariosTraerTodos,
    publicacionesTraerPorUsuario
}

export default connect(mapStateToProps,mapDispatchToProps)(Publicaciones)


