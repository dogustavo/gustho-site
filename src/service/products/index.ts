import axios from 'axios'
import api from 'service'

import { IPrductsPaginate, IOrder } from 'types'

interface IFilter {
  page?: number
  limit?: number
  pages?: number
  search?: string
  total?: number
}

interface IUserOrder extends IFilter {
  data: IOrder[]
}

interface ICheckout {
  clientAddressId: number | undefined
  products: {
    productId: number
    quantity: number
  }[]
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
    const response = await api.get(`/products/${id}`)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const productsCheckout = async (product: ICheckout) => {
  try {
    const response = await api.post(`/checkout`, { ...product })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}

export const getAllOrders = async () => {
  try {
    const response = await api.get<IUserOrder>(`/checkout/all`)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error('Ouve um problema com a chamada ')

    throw new Error('An unexpected error occurred')
  }
}
