import { useStore } from 'effector-react'
import { $cart } from './store'
import * as actions from './actions'

export function useCheckout() {
  const cart = useStore($cart)

  return {
    cart,
    ...actions
  }
}
