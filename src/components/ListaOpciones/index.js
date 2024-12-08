import "./index.css"

const ListaOpciones = (props) => {

    // const equipos = [
    //         "Programacion",
    //         "Front-End",
    //         "Data Science",
    //         "Devops",
    //         "UX y Diseño",
    //         "Móvil",
    //         "Innovación y Gestión"
    // ]

    const placeModi = `${props.placeholder}... `

    const actualizarSeleccion = (e) => props.actualizar(e.target.value)

    return <div className="campo-seleccion">
        <label>{props.nom.toUpperCase()}</label>
        <select required={props.required} value={props.valor} onChange={actualizarSeleccion}>
            <option value="" disabled>{placeModi}</option>
            {props.equipos.map(  (opcion, index) => <option value={opcion} key={index}>{opcion}</option>) }
        </select>
    </div>
} 

export default ListaOpciones