import { useCheckout } from 'models/checkout/hooks'
import { useCallback, useEffect, useState } from 'react'
import { Carrinho } from 'template'

const breadcrumbs = [
  {
    route: 'Início',
    url: '/'
  },
  {
    route: 'Produtos',
    url: '/produtos'
  },
  {
    route: 'Carrinho',
    url: '/carrinho'
  }
]

export default function Checkout() {
  const [cartItems, setCartItems] = useState([])
  const { getAllCartItems } = useCheckout()

  const handleCartItems = useCallback(async () => {
    const carts = await getAllCartItems()

    setCartItems(carts)
  }, [getAllCartItems])

  useEffect(() => {
    handleCartItems()
  }, [handleCartItems])

  return <Carrinho breadcrumbs={breadcrumbs} cart={cartItems} />
}
