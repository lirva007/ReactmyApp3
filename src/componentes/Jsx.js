import React, {useState, Fragment} from 'react';

const ComponenteUno = () => {

    const [numero, setNumero]=useState(3)

    return (
        <Fragment>
            <h2>Soy el Componente 1 y uso un If</h2>
            <h3>
                {
                    numero >= 10 ? "Es mayor o igual 10" : "Es menor que 10"
                }

            </h3>
        </Fragment>
        

     );
}
 
export default ComponenteUno;