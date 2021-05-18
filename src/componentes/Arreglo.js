import React, {useState, Fragment} from 'react';
import ComponenteUno from './Jsx';

const MiArreglo = () => {

    const [miColeccion, setMiColeccion] = useState ([1,2,3])

    const [numero, setnumero] = useState(4);

    const agregar = () =>{
        setnumero(numero + 1)
        setMiColeccion(
            [
                ...miColeccion, numero
            ]
        )
    }

    return ( 
        <Fragment>
            <h2>Hola Soy Un Componente Con Un Arreglo</h2>
            <h3>Contenido del arreglo</h3>
            <button onClick={agregar}>Agrega numero</button>
            <p>
                {
                    miColeccion.map(
                        (item) => <p>{item}</p>
                    )
                }
            </p>
        </Fragment>
     );
}
 
export default MiArreglo;