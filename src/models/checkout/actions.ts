import { createEvent, createEffect } from 'effector'
import { IProduct } from 'types'

import { parseCookies } from 'nookies'

export const addToCart = createEvent<IProduct>()
export const removeCartItem = createEvent<string>()

export const getAllCartItems = createEffect(async () => {
  const { userCart } = parseCookies()

  if (!userCart) {
    return []
  }

  const cart = JSON.parse(userCart)

  return cart
})

export const clearAllCartItems = createEvent()
