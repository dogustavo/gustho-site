import axios from 'axios'
import api from 'service'

import { IClient, IAddress, IClientFull } from 'types'

interface IClientUpdate {
  payload: IAddress
}

export const createNewClient = async (data: IClient) => {
  try {
    const response = await api.post<IClientFull>('/clients', data)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const updateClient = async ({ payload }: IClientUpdate) => {
  try {
    const response = await api.put<IClientFull>(`/clients`, {
      address: [{ ...payload, name: 'default' }]
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const fetchClientInfo = async () => {
  try {
    const response = await api.get<IClientFull>('/clients')

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}
