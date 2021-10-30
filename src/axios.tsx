import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9095'
})

export default instance