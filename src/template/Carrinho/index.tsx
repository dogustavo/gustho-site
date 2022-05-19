import { useState } from 'react'
import Link from 'next/link'

import { LayoutDefault } from 'layout'
import { Title, Container, Button } from 'components'
import { IBreadcrumbs, ICart } from 'types'
import { useUser } from 'models/user/hooks'

import { Table, Totals, Form } from './components'
import * as S from './styles'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  const { user } = useUser()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <LayoutDefault session="Carrinho">
      <Title title="Carrinho" breadcrumbs={breadcrumbs} />
      <Container>
        {cart.length > 0 ? (
          <S.Wrapper>
            <Table data={cart} />

            <div>
              <S.Address>
                {!user.addressRegistred ? (
                  <S.NoAddress>
                    <p>Cadastre seu endereço para continuar</p>

                    <Button types="submit" onClick={() => setIsModalOpen(true)}>
                      Cadastrar
                    </Button>
                  </S.NoAddress>
                ) : (
                  <>
                    <div>
                      <p>Rua Valdemir Panneli das Dores, 137</p>
                      <p>Jardim Casa Grande</p>
                      <p>Itapetininga, SP 18211090</p>
                    </div>

                    <S.AddressWrapper>
                      <Button types="submit">Alterar</Button>
                      <Button>Excluir</Button>
                    </S.AddressWrapper>
                  </>
                )}
              </S.Address>
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
