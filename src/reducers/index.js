import {combineReducers} from "redux"
import {usuariosReductor} from "./usuariosReducers"
import { publicacionesReductor } from "./publicacionesReducers"


export default combineReducers({
    usuariosReductor,
    publicacionesReductor
})

