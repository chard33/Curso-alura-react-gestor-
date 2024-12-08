import './App.css';
import Header from "./components/Header/Header.js"
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import ContenedorEquipo from "./components/ContenedorEquipo"
import { useState } from 'react';
import Footer from './components/Footer/index.js';
import { v4 as uuid } from 'uuid';

function App() {

  const [mostrar, mostrarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación", 
    nombre: "Carlos Miranda", 
    puesto: "Desarrollador", 
    url: "https://github.com/chard33.png",
    fav: true
  }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPri: "#D9F7E9",
      colorSec: "#57C278"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPri: "#E8F8FF",
      colorSec: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPri: "#F0F8E2",
      colorSec: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPri: "#FDE7E8",
      colorSec: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPri: "#FAE9F5",
      colorSec: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPri: "#FFF5D9",
      colorSec: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPri: "#FFEEDF",
      colorSec: "#FF8A29"
    }
  ])

  const eliminarColaborador = (id) => {
    
    const actualizarColab = colaboradores
                .filter((colaborador) => colaborador.id !== id)
    

    actualizarColaboradores(actualizarColab)
  }

  const actualizarFormulario = () => mostrarFormulario(!mostrar)

  const obtenerColaborador = (colaborador) => actualizarColaboradores([...colaboradores, colaborador])

  const actualizarColor = (id, color) => {

    const equiposActualizados = equipos.map((equipo) => {

      if(equipo.id === id){
        equipo.colorSec = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const actualizarEquipo = (equipo) => actualizarEquipos([...equipos, {...equipo, id: uuid()}])

  const actualizarFavorito = (id) => {
    const arregloActualizado = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(arregloActualizado) 
  }

  return (
    <div className='principal'>

      <Header/>

      {/* { mostrar === true ? <Formulario/> : <></>} */}
      {mostrar && <Formulario 
                  equipos={equipos.map((equipo) => equipo.titulo)}
                  obtenerColaborador={obtenerColaborador}
                  actualizarEquipo={actualizarEquipo}/>}

     <MiOrg actualizar={actualizarFormulario}/>

     {  equipos.map(
          (equipo, index) => 
            <ContenedorEquipo 
                key={equipo.titulo} 
                datos={equipo} 
                actualizarColor={actualizarColor}
                eliminarColaborador={eliminarColaborador}
                actualizarFavorito={actualizarFavorito}
                colaboradores={colaboradores.filter(
                                (colaborador) => colaborador.equipo === equipo.titulo)}/>
        )
      }

      <Footer />

    </div>
  );
}

export default App;
