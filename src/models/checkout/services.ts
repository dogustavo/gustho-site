import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { IProduct } from 'types'

export const addToCart = (state: IProduct) => {
  const { userCart } = parseCookies()

  let items: IProduct[] = userCart ? JSON.parse(userCart) : []

  const cart = items.reduce((acc, el) => {
    if (el.id === state.id) {
      el.quantity += 1
      items.splice(items.indexOf(el), 1)
      return el
    }

    return acc
  }, state)

  items.push(cart)

  setCookie(null, 'userCart', JSON.stringify(items), {
    maxAge: 60 * 60 * 24 * 7, //7 dias
    path: '/'
  })

  return items
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
  destroyCookie({}, 'userCart')

  return []
}
