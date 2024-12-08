import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones"
import ComponenteBoton from "../Boton"
import { useState } from "react"
import { v4 as uuid } from "uuid"

const Formulario = (props) => {

    const [nombre, obtenerNombre] = useState("")
    const [puesto, obtenerPuesto] = useState("")
    const [url, obtenerUrl] = useState("")
    const [equipo, obtenerEquipo] = useState("")

    const [titulo, obtenerTitulo] = useState("")
    const [color, obtenerColor] = useState("#000000")

    const {obtenerColaborador, actualizarEquipo} = props

    const manejarEvt = (evento) => {
        evento.preventDefault()
        let id= uuid()
        let fav= false
        
        let datos = {
            id,
            nombre,
            puesto,
            url,
            equipo,
            fav
        }

        obtenerColaborador(datos)

        obtenerNombre("")
        obtenerPuesto("")
        obtenerUrl("")
        obtenerEquipo("")
    }

    const obtenerCol = (valor) => obtenerColor(valor.target.value)

    const crearEquipo = (evento) =>{

        evento.preventDefault()
        actualizarEquipo({titulo, colorSec: color})

        obtenerTitulo("")
        obtenerColor("#000000")
    }

    return <section className="formulario">
        <form onSubmit={manejarEvt}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto nom="Nombre" placeholder="Ingresar nombre" valor={nombre} actualizar={obtenerNombre} required/>
            <CampoTexto nom="Puesto" placeholder="Ingresar puesto" valor={puesto} actualizar={obtenerPuesto} required/>
            <CampoTexto nom="Foto" placeholder="Ingresar enlace de foto" valor={url} actualizar={obtenerUrl} required/>
            <ListaOpciones nom="Equipo" placeholder="Seleccionar equipo" valor={equipo} actualizar={obtenerEquipo} equipos={props.equipos} required/>
            <ComponenteBoton nom="Crear"/>
        </form>
        <form onSubmit={crearEquipo}>
            <h2>Rellena el formulario para crear equipo.</h2>
            <CampoTexto nom="Titulo" placeholder="Ingresar nombre equipo" valor={titulo} actualizar={obtenerTitulo} required/>
            <label>COLOR</label>
            <input type="color" value={color} onChange={obtenerCol} className="selectorColor"/>
            <ComponenteBoton nom="Crear equipo"/>
        </form>
    </section>
}

export default Formulario