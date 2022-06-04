import { useState } from 'react'
import Link from 'next/link'

import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs, ICart } from 'types'

import { Table, Totals, Form, Address } from './components'
import * as S from './styles'
import { useUser } from 'models'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { userInfo } = useUser()

  return (
    <LayoutDefault session="Carrinho">
      <Title title="Carrinho" breadcrumbs={breadcrumbs} />
      <Container>
        {cart.length > 0 ? (
          <S.Wrapper>
            <Table data={cart} />

            <div>
              <Address setIsModalOpen={setIsModalOpen} />
              <S.Total>
                <h3>Total do carrinho</h3>
                <Totals data={cart} />
              </S.Total>
            </div>
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

      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </LayoutDefault>
  )
}
