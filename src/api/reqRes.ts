import axios from "axios";

//CONSTANTE QUE CAPTURA LA CONEXION A LA API
export const reqResApi = axios.create({
    baseURL: "https://reqres.in/api"

})