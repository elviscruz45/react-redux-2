import {combineReducers} from "redux"
import {usuariosReductor} from "./usuariosReducers"
import { publicacionesReductor } from "./publicacionesReducers"
import { tareasReductor } from "./tareasReducer"


export default combineReducers({
    usuariosReductor,
    publicacionesReductor,
    tareasReductor
})

