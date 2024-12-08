import "./index.css"

const MiOrg =  (props) => {
    
    return <div className="orgSeccion">
        <h3>Mi organización</h3>
        <img src="./add.png" alt="Agregar" onClick={props.actualizar}/>
    </div>
}

export default MiOrg