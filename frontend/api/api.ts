import axios from "axios";

const url = "http://ai-resume-intelligence-5jm4.onrender.com"
const api = axios.create({
    baseURL: url,
    withCredentials: true
})

export default api;