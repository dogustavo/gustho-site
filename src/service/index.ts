import axios from 'axios'

export * from './clients'
export * from './auth'
export * from './products'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export default api
