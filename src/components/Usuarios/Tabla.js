import React from "react"
import {connect} from "react-redux"
import { Link } from "react-router-dom"

const Tabla=(props)=>{

	const ponerFilas = () => props.usuarios.map((usuario,key) => (
		<tr key={key}>
            <td >
                {key}
			</td>
			<td >
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
            <td>
                <Link to={`/publicaciones/${key}`}>
                    <div className="eye-solid icon"></div>
                </Link>
            </td>
		</tr>
	))


    return <div>
        <table className="tabla">
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Correo
                    </th>
                    <th>
                        Enlace
                    </th>
                </tr>
            </thead>
            <tbody>
                { ponerFilas() }
            </tbody>
        </table>
    </div>
}

const mapStateToProps=(reducers)=>{
    return reducers.usuariosReductor
}



export default connect(mapStateToProps)(Tabla)

