import React, { Component } from 'react';
// import axios from "axios"
import {connect} from "react-redux"
import * as usuariosActions from "../../actions/usuariosActions"
import Spinner from '../General/Spinner';
import Fatal from "../General/Fatal"
import Tabla from "./Tabla"

class Usuarios extends Component {
//Aqui clasicamente se coloca el estado, pero en redux lo llevamos a una idea global
// 	constructor() {
// 		super();
// 		this.state = {
// 			usuarios: []
// 		}
// 	}

  componentDidMount(){
//Luego de renderizar el return, se renderiza la informacion en esta funcion
    // const respuesta =await axios.get("https://jsonplaceholder.typicode.com/users");
    // this.setState({
    //   usuarios:respuesta.data
    // })

    if (!this.props.usuarios.length){
        this.props.traerTodos()
    }
  }

  ponerContenido=()=>{
    if (this.props.cargando){
        return <Spinner/>
    }

    if (this.props.error){
        return <Fatal mensaje={this.props.error}/>
    }
    
    return <Tabla />
  }
  
	render() {
         console.log(this.props)
        // console.log(this.props.error)

		return (
			<div>
                <h1>Usuarios</h1>
				{this.ponerContenido()}
			</div>
		)
	}
}

const mapStateToProps=(reducers)=>{
    return reducers.usuariosReductor;
}

export default connect(mapStateToProps,usuariosActions)(Usuarios)
// export {Usuarios}
