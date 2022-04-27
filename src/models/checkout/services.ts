import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { ICart } from 'types'

export const addToCart = (state: ICart) => {
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

  return []
}
