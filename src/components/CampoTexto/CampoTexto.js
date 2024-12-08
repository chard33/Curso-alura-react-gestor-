import "./CampoTexto.css"

const CampoTexto = (props) => {

    // const [valor, actualizarValor] = useState("")

    const obtenerValor = (val) =>{
        props.actualizar(val.target.value)
        //console.log(props.valor)
    }
    const holderMod = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.nom.toUpperCase()}</label>
            <input 
                placeholder={holderMod} 
                required={props.required} 
                onChange={obtenerValor} 
                value={props.valor}/>
        </div>
    );
};

export default CampoTexto