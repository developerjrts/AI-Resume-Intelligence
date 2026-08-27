import axios from "axios";

export const url = "http://ai-resume-intelligence-5jm4.onrender.com"
// export const url = "http://localhost:5000"
const api = axios.create({
    baseURL: url,
    withCredentials: true
})

export default api;