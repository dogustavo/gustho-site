import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs, ICart } from 'types'

import { Table, Totals } from './components'

import * as S from './styles'
import Link from 'next/link'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  return (
    <LayoutDefault session="Carrinho">
      <Title title="Carrinho" breadcrumbs={breadcrumbs} />
      <Container>
        {cart.length > 0 ? (
          <S.Wrapper>
            <Table data={cart} />
            <S.Total>
              <h3>Total do carrinho</h3>

              <Totals data={cart} />
            </S.Total>
          </S.Wrapper>
        ) : (
          <S.Empty>
            <img src="/static/img/empty.svg" alt="Carrinho vazio" />
            <h3>O Carrinho está vazio</h3>

            <Link href="/produtos">
              <a>Ver produtos</a>
            </Link>
          </S.Empty>
        )}
      </Container>
    </LayoutDefault>
  )
}
