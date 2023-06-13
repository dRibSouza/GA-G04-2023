import axios from "axios";


const api = axios.create({
    baseURL: "http://locahost:5000",
});

export default api;