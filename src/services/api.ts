import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend1-ltbj.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api