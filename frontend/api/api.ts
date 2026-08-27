import axios from "axios";

const url = "https://ai-resume-intelligence-5jm4.onrender.com"
// const url = "http://localhost:5000"

const api = axios.create({
    baseURL: url,
    withCredentials: true
})

export default api;