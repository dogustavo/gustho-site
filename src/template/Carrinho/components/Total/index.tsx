import { useState } from 'react'
import { Button, Modal } from 'components'
import { useUser } from 'models'
import { useCheckout, useNotification } from 'models'
import { IProduct } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

import { useMutation } from 'react-query'
import { productsCheckout } from 'service'
import { useRouter } from 'next/router'

interface IProps {
  data: IProduct[]
}

export default function Totals({ data }: IProps) {
  const router = useRouter()

  const { clearAllCartItems } = useCheckout()
  const { sendNotification } = useNotification()
  const { address } = useUser()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { mutate } = useMutation(productsCheckout, {
    onSuccess: () => {
      clearAllCartItems()
      router.push('/meus-pedidos')

      sendNotification({
        show: true,
        message: `Compra realizada com sucesso!`,
        type: 'success'
      })
    }
  })

  const handleTotalPrice = () => {
    const total = data?.reduce(
      (acc: number, current: IProduct) =>
        acc + current.price * current.quantity,
      0
    )

    return convertMonetary(total)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)

    sendNotification({
      show: true,
      message: `Seu carrinho foi limpo!`,
      type: 'info'
    })

    clearAllCartItems()
    document.getElementById('__next')?.setAttribute('style', '')
  }

  const onSubmitCheckout = async () => {
    const payload = {
      clientAddressId: parseInt(address[0].id as string),
      products: data?.map((el) => {
        return { productId: el.id, quantity: el.quantity }
      })
    }

    mutate(payload)
  }

  return (
    <S.Wrapper>
      <S.Price>
        <p>Entrga:</p>
        <span>R$ 0</span>
      </S.Price>

      <S.Price>
        <p>Total:</p>
        <span>{handleTotalPrice()}</span>
      </S.Price>

      <S.Buttons>
        <Button onClick={() => setIsModalOpen(true)}>Limpar carrinho</Button>
        <Button
          title="submit"
          onClick={onSubmitCheckout}
          isDisabled={!address[0]}
        >
          Finalizar compra
        </Button>
      </S.Buttons>

      {!address[0] && <S.Text>Para continuar cadastre seu endereço</S.Text>}

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <S.ModalWrapper>
          <h2>Tem certeza?</h2>
          <p>Ao limpar o carrinho todos o itens serão removidos!</p>
        </S.ModalWrapper>
        <Button onClick={handleCloseModal}>Confirmar</Button>
      </Modal>
    </S.Wrapper>
  )
}
