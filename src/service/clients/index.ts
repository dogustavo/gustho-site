import axios from 'axios'
import api from 'service'

import { IClient, IAddress } from 'types'

interface IClientUpdate {
  id: string
  payload: IAddress
}

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

export const updateClient = async ({ id, payload }: IClientUpdate) => {
  try {
    const response = await api.put(`/clients/${id}`, payload)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const fetchClientInfo = async () => {
  try {
    const response = await api.get('/clients')

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}
