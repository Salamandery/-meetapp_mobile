import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://192.168.15.7:3333",
})

export default api;