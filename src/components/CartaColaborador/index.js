import "./index.css"
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const CartaColaborador = (props) => {

    const {nombre, equipo, puesto, url, fav} = props.datos
    const eliminarColaborador = props.eliminarColaborador
    const {actualizarFavorito} = props

    const fondo = {backgroundColor: props.fondoColor}

    return <div className="colaborador">
        <div className="encabezado" style={fondo}>
            <img src={url} alt={nombre} />
            <img src="/eliminar.png" alt="Eliminar" className="eliminar" onClick={eliminarColaborador}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
        {fav ? (
            <IoHeartSharp className="gusta" style={{ fill: "#ff0000" }} onClick={actualizarFavorito} />
        ) : (
            <IoHeartOutline className="gusta" onClick={actualizarFavorito} />
        )}
    </div>
}

export default CartaColaborador