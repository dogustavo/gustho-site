import { LayoutDefault } from 'layout'
import { IProduct } from 'types'

import { Title } from 'components'
import { List } from './components'

interface IProducts {
  products: IProduct[]
}

const breadcrumbs = [
  {
    route: 'Início',
    url: '/'
  },
  {
    route: 'Produtos',
    url: '/produtos'
  }
]

export default function Produtos({ products }: IProducts) {
  return (
    <LayoutDefault session={'Produtos'}>
      <Title title="Produtos" breadcrumbs={breadcrumbs} />
      <List products={products} />
    </LayoutDefault>
  )
}
