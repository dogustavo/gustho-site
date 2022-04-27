import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs, ICart } from 'types'

import { Table, Totals } from './components'

import * as S from './styles'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  console.log(cart)
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
            <h2>Teste</h2>
          </S.Empty>
        )}
      </Container>
    </LayoutDefault>
  )
}
