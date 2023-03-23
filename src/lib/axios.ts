import axios from 'axios'

const BASE_URL = 'https://reqres.in/'

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/`,
})

export default axiosInstance
