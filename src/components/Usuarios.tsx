import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ListaUsuario, Usuario } from "../interfaces/listaUsuarios";


export const Usuarios = () => {

    //GENERAR UN ARREGLO DE USUARIOS

    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        //LLAMAR AL API
        reqResApi.get<ListaUsuario>("/users").then(resp => {

            setUsers(resp.data.data)

        })
            .catch(console.log)

  
    }, [])
    

//funcion que repite las filas necesarias en la tabla para mostrar los usuarios


const itemRowsTable = ({avatar, id, first_name, last_name, email}: Usuario) => {
    //desustrucutracion del objeto
    //const {id, first_name, last_name, email, avatar} =usuario;

    return(
        <tr>
        <th>
            <img
                src={avatar}
                alt={first_name}
                style={{
                    width: 40,
                    borderRadius: 10,
                }}
            />
        </th>
        <th>{id}</th>
        <th>{first_name} {last_name}</th>
        <th>{email}</th>
    </tr>
    )

}

    return (
        <div>
            <h3>
                Usuarios
            </h3>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemRowsTable(usuario))
                    }
              
                </tbody>
                
            </table>
        </div>
    )
}
