import axios from 'axios'
import api from 'service'

import { IClient } from 'types'

export const createNewClient = async (data: IClient) => {
  try {
    const response = await api.post<IClient>('/clients', data)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const fetchClientInfo = async () => {
  try {
    const response = await api.get('/users')

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}
