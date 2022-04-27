import { createStore } from 'effector'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { ICart } from 'types'
import * as actions from './actions'

const initialStore: ICart[] = []

export const $cart = createStore<ICart[]>(initialStore, {
  name: 'user checkout'
})

const addToCart = (state: ICart) => {
  const { userCart } = parseCookies()

  let cart: ICart[] = []

  if (userCart) {
    cart = JSON.parse(userCart)

    const hasOnCart = cart.find((el) => el.id === state.id)

    if (hasOnCart) {
      return
    }
  }

  cart.push(state)

  setCookie(null, 'userCart', JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 7, //7 dias
    path: '/'
  })

  return cart
}

export const removeItem = (id: string) => {
  const { userCart } = parseCookies()

  if (userCart) {
    const cart = JSON.parse(userCart)

    const newCart = cart.filter((el: ICart) => el.id !== id)

    setCookie(null, 'userCart', JSON.stringify(newCart), {
      maxAge: 60 * 60 * 24 * 7, //7 dias
      path: '/'
    })

    return newCart
  }
}

export const clearAllCartItems = () => {
  destroyCookie(null, 'userCart')

  return initialStore
}

$cart
  .on(actions.addToCart, (_, data) => addToCart(data))
  .on(actions.removeCartItem, (_, id) => removeItem(id))
  .on(actions.clearAllCartItems, () => clearAllCartItems())
  .on(actions.getAllCartItems.doneData, (_, cart: ICart[]) => cart)
