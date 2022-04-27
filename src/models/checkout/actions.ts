import { createEvent, createEffect } from 'effector'
import { ICart } from 'types'

import { parseCookies } from 'nookies'

export const addToCart = createEvent<ICart>()
export const removeCartItem = createEvent<string>()

export const getAllCartItems = createEffect(async () => {
  const { userCart } = parseCookies()

  if (!userCart) {
    return []
  }

  const cart = JSON.parse(userCart)

  return cart
})
