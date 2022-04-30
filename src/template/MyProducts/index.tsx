import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs } from 'types'

import { Table } from './components'

import * as S from './styles'
import Link from 'next/link'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  products: Products[]
}

interface Products {
  id: string
  name: string
  slug: string
  price: number
  image_url: string
}

export default function MyProducts({ breadcrumbs, products }: IProps) {
  return (
    <LayoutDefault session="Meus Pedidos">
      <Title title="Pedidos" breadcrumbs={breadcrumbs} />
      <Container>
        {products.length > 0 ? (
          <S.Wrapper>
            <Table data={products} />
          </S.Wrapper>
        ) : (
          <S.Empty>
            <img src="/static/img/empty.svg" alt="Carrinho vazio" />
            <h3>Você ainda não adquiriu nenhum produtos!</h3>

            <Link href="/produtos">
              <a>Ver produtos</a>
            </Link>
          </S.Empty>
        )}
      </Container>
    </LayoutDefault>
  )
}
