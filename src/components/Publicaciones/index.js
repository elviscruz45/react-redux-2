import React ,{useEffect} from "react"
import { useParams } from "react-router-dom"
import {connect} from "react-redux"
import Spinner from "../General/Spinner"
import Fatal from "../General/Fatal"

import * as usuariosActions from "../../actions/usuariosActions"
import * as publicacionesActions from "../../actions/publicacionesActions"
import { usuariosReductor } from "../../reducers/usuariosReducers"

const {traerTodos:usuariosTraerTodos}=usuariosActions
const {traerPorUsuario:publicacionesTraerPorUsuario}=publicacionesActions

const Publicaciones=(props)=>  {
    const {key}=useParams()
    console.log(key)

    useEffect(()=>{
        async function traerTodosUsuarios(){

            if(!props.usuariosReductor.usuarios.length){
                await props.usuariosTraerTodos()
            }
            if (props.usuariosReductor.error){
                return
            }
        }

        traerTodosUsuarios()

        async function traerPorUsuario(){

            if(!("publicaciones_key" in props.usuariosReductor.usuarios[key])){
                await props.publicacionesTraerPorUsuario(key)
            }
        }
        traerPorUsuario()

    },[])

    const  ponerUsuario=()=>{
        if (props.usuariosReductor.error){
            return <Fatal mensaje={props.usuariosReductor.error}/>
        }
        if (props.usuariosReductor.cargando || !props.usuariosReductor.usuarios.length){
            return <Spinner />
        }
        const nombre=props.usuariosReductor.usuarios[key].name
        return (
            <h1>
            Publicaciones de: {nombre}
            </h1>
        )
    }

    const ponerPublicaciones=()=>{
        const {
            usuariosReductor,
            usuariosReductor:{usuarios},
            publicacionesReductor,
            publicacionesReductor:{publicaciones},
        }=props

        if(!usuarios.length) return
        if(usuariosReductor.error) return
        if(publicacionesReductor.cargando) {
            return <Spinner/>
        }
        if(publicacionesReductor.error){
            return <Fatal mensaje={publicacionesReductor.error}/>
        }

        if (!publicaciones.length) return
        if(!("publicaciones_key" in usuarios[key])) return

        const {publicaciones_key}=usuarios[key]

        return(publicaciones[publicaciones_key].map((publicaciones,key)=>(
            <div className="pub_titulo" key={key}>
                <h2>
                    {publicaciones.title}
                </h2>
                <h3>
                    {publicaciones.body}
                </h3>
            </div>
        ))
        )
    }
    return <div>
        {console.log(props)}
        {ponerUsuario()}
        {ponerPublicaciones()}
        </div>
}



// Redux


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

