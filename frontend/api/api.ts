import axios from "axios";

// export const url = "http://localhost:5000"
export const url = "https://ai-resume-intelligence-5jm4.onrender.com"

const api = axios.create({
    baseURL: url,
    withCredentials: true
})

export default api;