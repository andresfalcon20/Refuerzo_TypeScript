import { useEffect, useReducer } from "react"

export const Login = () => {

    //interface estado de autentifiacion
    interface AuthState {
        validando: boolean,
        token: null | string,
        username: string,
        password: string
    }


    //CREANDO ESTADO INICIAL
    const inicialState: AuthState = {
        validando: true,
        token: null,
        username: "",
        password: ""

    }
    //type para los parametros de las acciones
    type LoginPayload = { 
        username: string; 
        password: string;
    }



    type AuthAction = 
        {type: "logout"}
        | {type: "login", payload: LoginPayload};



    //funcion reducer - primer parametro
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case "logout":
                return {
                    validando: false,
                    token: null ,
                    username: "",
                    password: ""
                }

            case "login":
                //DESESTRUCTURACION DE OBJETOS
                const {username, password} = action.payload;
    
                return {
                    validando: false,
                    token: "ANDRXS*_/*",
                    username: username,
                    password: password
                }
            default:
                return state;

        }


    }




    //hoook useReducer: permite el cambio de estados mas complejos
    const [state, dispatch] = useReducer(authReducer, inicialState);

    //hook useEffect: permite ejecutar efectos secundarios en componentes funcionales
    useEffect(() => {
        //funcion de tiempo
        setTimeout(() => {
            //Disparando la accion
            dispatch({ type: "logout" })


        }, 1500); //milisegundos

    }, []);

    //FUNCION PARA DISPARAR LA ACCION LOGIN

    const login = (): void => {
        dispatch({
            type: "login",
            payload: {
                username: "Andrxs",
                password: "Andres20",
            }
        })
    }

    //funcion para disparar la accion logout
    const logout = (): void => {
        dispatch({
            type: "logout",
        })
    }

    //IMPLEMENTAR UNA VALIDACION PARA MOSTRAR LOS MENSAJES DE ACUERDO A LA ACCION
    if (state.validando) {
        return (
            <div>
                <h3> Login </h3>
                <br />
                <div className="alert alert-info">
                    Validando.....
                </div>
            </div>
        )
    }


    return (
        <div>
            <h3> Login </h3>
            {(state.token == null) 
                       ? <div className="alert alert-danger">
                        No auntenticado.....
                    </div>
        
                   : <div className="alert alert-success">
                        Autenticando.....
                    </div>
            
            }

     {(state.token == null)
            ? <button className="btn btn-primary" onClick={login}> Login </button>
            : <button className="btn btn-danger" onClick={logout} > Logout </button>
        }
        </div>
    )
}
