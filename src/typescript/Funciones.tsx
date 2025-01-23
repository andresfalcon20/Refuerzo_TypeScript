//rafc+enter

export const Funciones = () => {
    //Funciones
    /*const sumar = () : number =>{
        return 6+1;
    }*/

    //Funciones con parametros
    const sumar = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    /*const informacion = (): void => {
        console.log("Hola");
    }*/

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(5, 6)}</span>

            {/*<button onClick={informacion}> Enviar</button>*/}


        </div>
    )
}
