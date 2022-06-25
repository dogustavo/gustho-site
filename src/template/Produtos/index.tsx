import { LayoutDefault } from 'layout'
import { IProduct, IFilter } from 'types'

import { Title } from 'components'
import { List } from './components'

interface IProps {
  data: IProduct[]
  total: number
  pages: number
  page: number
  limit: number
}

interface IProducts {
  products: IProps | undefined
  setFilter: (props: IFilter) => void
  filter: IFilter
  isLoading: boolean
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

export default function Produtos({
  products,
  setFilter,
  filter,
  isLoading
}: IProducts) {
  return (
    <LayoutDefault session={'Produtos'}>
      <Title title="Produtos" breadcrumbs={breadcrumbs} />
      <List
        products={products}
        setFilter={setFilter}
        isLoading={isLoading}
        filter={filter}
      />
    </LayoutDefault>
  )
}
