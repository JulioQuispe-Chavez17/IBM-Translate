import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ibm-translate.herokuapp.com/'
})

export default instance
