import { useCheckout } from 'models'
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
  const { cart } = useCheckout()

  return <Carrinho breadcrumbs={breadcrumbs} cart={cart} />
}
