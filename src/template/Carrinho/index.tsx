import { useState } from 'react'
import Link from 'next/link'

import { LayoutDefault } from 'layout'
import { Title, Container, Button, Modal, Input } from 'components'
import { IBreadcrumbs, ICart } from 'types'
import { useUser } from 'models/user/hooks'

import { Table, Totals } from './components'
import * as S from './styles'
import { useForm, FormProvider } from 'react-hook-form'

import findCep from 'cep-promise'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  cart: ICart[]
}

export default function Carrinho({ breadcrumbs, cart }: IProps) {
  const { user } = useUser()
  const methods = useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })

  const getUserLoaction = async () => {
    console.log('teste')
  }

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

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <FormProvider {...methods}>
          <S.Form onSubmit={onSubmit}>
            <div>
              <Input
                name="zipcode"
                label="CEP"
                type="text"
                mask="zipcode"
                inputMode="numeric"
                required={true}
              />
              <button onClick={getUserLoaction}>
                <img src="/static/img/search.svg" alt="Icone lupa" />
              </button>
            </div>
            <div>
              <Input name="street" label="Rua" type="text" required={true} />
              <Input
                name="district"
                label="Bairro"
                type="text"
                required={true}
              />
            </div>
            <div>
              <Input name="number" label="Número" type="text" required={true} />
              <Input name="city" label="Cidade" type="text" required={true} />
              <Input name="state" label="Estado" type="text" required={true} />
            </div>
          </S.Form>
        </FormProvider>
      </Modal>
    </LayoutDefault>
  )
}
