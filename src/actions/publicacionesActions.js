import axios from "axios"
import { ACTUALIZAR,CARGANDO,ERROR } from "../types/publicacionesTypes";
import * as usuariosTypes from "../types/usuariosTypes"

const {TRAER_TODOS:USUARIOS_TRAER_TODOS}=usuariosTypes

export const traerPorUsuario=(key)=>async(dispatch,getState)=>{
    dispatch({
        type:CARGANDO,
    })


    const {usuarios}=getState().usuariosReductor
    const {publicaciones}=getState().publicacionesReductor
    const usuario_id=usuarios[key].id

    try{
        const respuesta=await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
        console.log(respuesta)
        const nuevas=respuesta.data.map((publicacion)=>({
            ...publicacion,
            comentarios:[],
            abierto:false
        }))
        const publicaciones_actualizadas=[
            ...publicaciones,
            nuevas
        ]

    dispatch({
        type:ACTUALIZAR,
        payload:publicaciones_actualizadas
    })

    const publicaciones_key=publicaciones_actualizadas.length-1
    const usuarios_actualizados=[...usuarios]
    usuarios_actualizados[key]={
        ...usuarios[key],
        publicaciones_key
    }
    dispatch({
        type:USUARIOS_TRAER_TODOS,
        payload:usuarios_actualizados
    })
    }
    catch (error){
        console.log(error.message)
        dispatch({
            type:ERROR,
            payload:"publicaciones no disponibles"
        })
    }
}


export const abrirCerrar=(pub_key,com_key)=>(dispatch,getState)=>{
    const {publicaciones}=getState().publicacionesReductor
    const seleccionada=publicaciones[pub_key][com_key]
    console.log(publicaciones)
    const actualizada={
        ...seleccionada,
        abierto:!seleccionada.abierto
    }
    console.log(actualizada)

    const publicaciones_actualizadas=[...publicaciones]
    publicaciones_actualizadas[pub_key]=[...publicaciones[pub_key]]
    publicaciones_actualizadas[pub_key][com_key]=actualizada

    dispatch({
        type:ACTUALIZAR,
        payload:publicaciones_actualizadas
    })
}
