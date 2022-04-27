import { createStore } from 'effector'

import { ICart } from 'types'
import * as actions from './actions'

import { addToCart, clearAllCartItems, removeItem } from './services'

const initialStore: ICart[] = []

export const $cart = createStore<ICart[]>(initialStore, {
  name: 'user checkout'
})

$cart
  .on(actions.addToCart, (_, data) => addToCart(data))
  .on(actions.removeCartItem, (_, id) => removeItem(id))
  .on(actions.clearAllCartItems, () => clearAllCartItems())
  .on(actions.getAllCartItems.doneData, (_, cart: ICart[]) => cart)
