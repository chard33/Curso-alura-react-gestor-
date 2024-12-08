import "./index.css"
import CartaColaborador from "../CartaColaborador"
import hexToRgba from "hex-to-rgba"

const ContenedorEquipo = (props) => {

    const {titulo, colorPri, colorSec, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, actualizarFavorito} = props

    const estilosSeccion = {backgroundColor: hexToRgba(colorSec, '0.40')}

    const estilosTitulo = {borderColor: colorSec}

    const obtenerColor = (evento) => actualizarColor(id, evento.target.value)

    return colaboradores.length > 0 && <section className="contenedorEquipo" style={estilosSeccion}>
        <h3 style={estilosTitulo}>{titulo}</h3>
        <input type="color" value={colorSec} className="seleccionColor" onChange={obtenerColor}/>
        <div className="contenedorColaboradores">
            {colaboradores.map((colaborador, index) => <CartaColaborador key={index} datos={colaborador}fondoColor={colorSec}
            fav={colaborador.fav}
            actualizarFavorito={() => actualizarFavorito(colaborador.id)}
            eliminarColaborador={() => eliminarColaborador(colaborador.id)}/> )}
            </div>
    </section>
}

export default ContenedorEquipo