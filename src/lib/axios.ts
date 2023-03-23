import axios from 'axios'

const BASE_URL = 'https://reqres.in'

export default axios.create({
  baseURL: `${BASE_URL}/api/`,
})
