import { createStore } from 'effector'

import { IProduct } from 'types'
import * as actions from './actions'

import { addToCart, clearAllCartItems, removeItem } from './services'

const initialStore: IProduct[] = []

export const $cart = createStore<IProduct[]>(initialStore, {
  name: 'user checkout'
})

$cart
  .on(actions.addToCart, (_, data) => addToCart(data))
  .on(actions.removeCartItem, (_, id) => removeItem(id))
  .on(actions.clearAllCartItems, () => clearAllCartItems())
  .on(actions.getAllCartItems.doneData, (_, cart: IProduct[]) => cart)
