import React, {useState, Fragment} from 'react';

const MiFormulario = () => {
    
//Declarar el Objeto
const [persona, setPersona] = useState({
    nombre:'',
    apellido: ''
})

//funcion evento cambio
const funcionCambio = (event) => {
    //console.log('algo')
    setPersona(
        {
        ...persona, [event.target.name] : event.target.value 
        }
)

}

const [dato, setDato] = useState("");
    
//funcion con evento submit
const envioBoton = (event) => {
        event.preventDefault();
        setDato(persona.nombre + '' + persona.apellido)
    }
    return ( 
        <Fragment>
            <div className="container">
            <h1>Soy un Formulario y manejo un objeto</h1>
            <form className="row" onSubmit={envioBoton}>
                <div className="col-md-3">
                    <input
                    placeholder = "Ingrese Nombre"
                    className = "form-control"
                    type = "text"
                    name = "nombre"
                    onChange = {funcionCambio} //se indica con llaves una funcion
                    />
                </div>
                <div className="col-md-3">
                    <input
                    placeholder = "Ingrese Apellido"
                    className = "form-control"
                    type = "text"
                    name = "apellido"
                    onChange = {funcionCambio} //se indica con llaves una funcion
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>
            <h4>{persona.nombre} {persona.apellido}</h4>
            <h5>{dato}</h5>
            </div>
        </Fragment>
     );
}
 
export default MiFormulario;