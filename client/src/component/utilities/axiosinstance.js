import axios from "axios"

const DB_URL=import.meta.env.VITE_DB_URL

const instance = axios.create({
    baseURL: DB_URL,
    withCredentials:true,
    headers: {
        ContentType: 'application/json',  
    },
})

export default instance