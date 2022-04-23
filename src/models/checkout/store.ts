import { createStore } from 'effector'
import { setCookie, parseCookies } from 'nookies'

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

  console.log('cart', cart)
  console.log('state', state)

  setCookie(null, 'userCart', JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 7, //7 dias
    path: '/'
  })

  return cart
}

$cart
  .on(actions.addToCart, (_, data) => addToCart(data))
  .on(actions.getAllCartItems.doneData, (_, cart: ICart[]) => cart)
