import axios from "axios"

const BASE_URL = "https://json-server.cyogian.repl.co"
const instance = axios.create({
    baseURL: BASE_URL
})

export default instance;