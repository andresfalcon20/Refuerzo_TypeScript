//rafc+enter

export const TiposBasico = () => {
    //variables
    //let nombre: string | number = "Viviana";
    //let nombre: string = "Viviana";
    //constantes
    const nombre: string = "Viviana";
    const edad: number = 32;
    const donanteOrganos: boolean = true;
    //arreglos
    const poderes: string[] =["velocidad", "volar", "invisibilidad"];
    //agregar datos en el arreglo
    poderes.push("fuerza ");
    return (
    <div>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {donanteOrganos ? "donante" : "no donante"}
        <br />
        {poderes.join(", ")}


    </div>
  )
}


