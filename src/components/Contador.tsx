import { useState } from "react"

export const Contador = () => {
    //hook useState: el cambio de estado de un componente, variable, arreglo, etc.
    //1. variable, arreglo, etc -- valor
    //2. funcion que cambia el estado variable, arreglo, etc
    const [valor, setValor] = useState <number> (0); //() valor inicial de una variable, arreglo, etc

//Cambiar el estado mediante la funcion
const contador= (numero: number): void=>{
setValor(valor+numero);
}


  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button className="btn btn-primary" onClick={()=>contador(5)}>+5</button>
        
                &nbsp; {/*espacio*/}
        
        <button className="btn btn-primary" onClick={()=> contador(-1)}>-5</button>



    </div>
  )
}
