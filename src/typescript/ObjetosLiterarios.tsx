// rafc+enter

export const ObjetosLiterarios = () => {
    //Interface
    interface Persona {
        nombreCompleto: string;
        apellido: string;
        edad: number;
        direccion: Direccion
    }

    interface Direccion {
        pais: string;
        casaNumero: number;

    }

    //objeto
    const persona: Persona = {
        nombreCompleto: "Viviana Matilde",
        apellido: "Flores",
        edad: 32,
        direccion: {
            pais: "Ecuador",
            casaNumero: 365
        }
    }
    //Ingresar a las propiedades del objeto
    persona.nombreCompleto = "Ronnie Ariel";

    //const personaObj = new Persona();
    
    
    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
