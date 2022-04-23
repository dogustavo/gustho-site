import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs, ICart } from 'types'

import { Table } from './components'

import * as S from './styles'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  return (
    <LayoutDefault session="Carrinho">
      <Title title="Carrinho" breadcrumbs={breadcrumbs} />
      <Container>
        <S.Wrapper>
          <h1>Teste</h1>
          <Table data={cart} />
        </S.Wrapper>
      </Container>
    </LayoutDefault>
  )
}
