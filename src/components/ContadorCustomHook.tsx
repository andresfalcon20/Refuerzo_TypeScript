import { useCounter } from "../hooks/useCounter"

export const ContadorCustomHook = () => {

//LLAMAR A NUESTRO CUSTOM HOOK
//ACCEDEMOS A LOS VALORES DE RETORNO DE NUESTRA FUNCION - HOOK
const {valor, contador} = useCounter(50);



  return (
    <div>
      <h3>Contador Custom H: <small>{valor}</small></h3>
      <button className="btn btn-primary" onClick={() => contador(1)}>+1</button>

      &nbsp; {/*espacio*/}

      <button className="btn btn-primary" onClick={() => contador(-1)}>-1</button>



    </div>
  )
}
