import axios from 'axios'
import api from 'service'

import { IPrductsPaginate } from 'types'

interface IFilter {
  page?: number
  limit?: number
  search?: string
}

export const getProducts = async (filter: IFilter) => {
  try {
    const response = await api.get<IPrductsPaginate>('/products/paginate', {
      params: filter || undefined
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const getProductDetalied = async (id: string) => {
  try {
    const response = await api.get<IPrductsPaginate>(`/products/${id}`)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}
