import React,{Component} from "react"
import {connect} from "react-redux"
import Spinner from "../General/Spinner"
import Fatal from "../General/Fatal"
import { Navigate } from "react-router-dom"
import withRouter from "./withRouter"


import * as tareasActions from "../../actions/tareasActions"

class Guardar extends Component {
    componentDidMount(){
        console.log("Props: ",this.props)
         const {
             params:{usu_id,tar_id},
             tareas,
             cambioUsuarioId,
             cambioTitulo,
             limpiarForma
         }=this.props

         if (usu_id && tar_id){
             const tarea=tareas[usu_id][tar_id]
             cambioUsuarioId(tarea.userId)
             cambioTitulo(tarea.title)
         }
         else{
            limpiarForma()
         }
    }

    cambioUsuarioId=(event)=>{
        this.props.cambioUsuarioId(event.target.value)
    }
    cambioTitulo=(event)=>{
        this.props.cambioTitulo(event.target.value)
    }
    guardar=()=>{
        const {params:{usu_id,tar_id},
                tareas,
                usuario_id,
                titulo,
                agregar,
                editar}=this.props

        const nueva_tarea={
            userId:usuario_id,
            title:titulo,
            complete:false
        }
        if (usu_id && tar_id){
            const tarea=tareas[usu_id][tar_id]
            const tarea_editada={
                ...nueva_tarea,
                completed:tarea.completed,
                id:tarea.id
            }
            editar(tarea_editada)
        }
        else{
            agregar(nueva_tarea)
        }
    }
    deshabilitar=()=>{
        const {usuario_id,titulo,cargando}=this.props
        if(cargando){
            return true
        }
        if(!usuario_id || !titulo){
            return true
        }
        return false
    }
    mostrarAccion=()=>{
        const {error,cargando}=this.props
        if (cargando){
            return <Spinner/>
        }
        if (error){
            return <Fatal mensaje={error}/>
        }
    }
    render(){
        return (
            <div>
                {
                    (this.props.regresar)?<Navigate to="/tareas"/>:""
                }
                <h1>
                    Guardar Tarea
                </h1>
                Usuario id:
                <input 
                    type="number"
                    value={this.props.usuario_id}
                    onChange={this.cambioUsuarioId}
                />
                <br/><br/>
                Titulo:
                <input
                    value={this.props.titulo}
                    onChange={this.cambioTitulo}

                />
                <br/><br/>
                <button
                    onClick={this.guardar}
                    disabled={this.deshabilitar()}
                    >
                    Guardar
                </button>
                {this.mostrarAccion()}
            </div>
        )
    }
}

const mapStateToProps=({tareasReductor})=>tareasReductor

export default withRouter(connect(mapStateToProps,tareasActions)(Guardar))

