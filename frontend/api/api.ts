import axios from "axios";

<<<<<<< HEAD
export const url = "http://ai-resume-intelligence-5jm4.onrender.com"
// export const url = "http://localhost:5000"
=======
const url = "https://ai-resume-intelligence-5jm4.onrender.com"
// const url = "http://localhost:5000"
>>>>>>> 0d17f7c7f9f15282c8eaecb7291e660acdc73d5a
const api = axios.create({
    baseURL: url,
    withCredentials: true
})

export default api;