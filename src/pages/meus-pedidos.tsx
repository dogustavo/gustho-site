import { MyProducts } from 'template'

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
    route: 'Meus Pedidos',
    url: '/meus-pedidos'
  }
]

const products = [
  {
    id: '1f55079c-b805-11ec-b909-0242ac120015',
    name: 'Tênis',
    slug: 'cantilever-chair7',
    price: 99.99,
    image_url: 'https://dummyimage.com/270x240/8e009e/ffffff.png'
  },
  {
    id: '1f550102-b805-11ec-b909-0242ac120012',
    name: 'Mouse',
    slug: 'cantilever-chair4',
    price: 50.01,
    image_url: 'https://dummyimage.com/270x240/0a6100/ffffff.png'
  }
]

export default function Products() {
  return <MyProducts breadcrumbs={breadcrumbs} products={products} />
}
