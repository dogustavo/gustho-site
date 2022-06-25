import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { IProduct } from 'types'

export const addToCart = (state: IProduct) => {
  const { userCart } = parseCookies()

  let cart: IProduct[] = []

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

    const newCart = cart.filter((el: IProduct) => el.id.toString() !== id)

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
