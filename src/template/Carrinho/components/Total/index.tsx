import { Button, Modal } from 'components'
import { useCheckout } from 'models/checkout/hooks'
import { useNotification } from 'models/notification/hooks'
import { useState } from 'react'
import { ICart } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: ICart[]
}

export default function Totals({ data }: IProps) {
  const { clearAllCartItems } = useCheckout()
  const { sendNotification } = useNotification()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTotalPrice = () => {
    const total = data?.reduce(
      (acc: number, current: ICart) => acc + current.price,
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
        <Button title="submit">Finalizar compra</Button>
      </S.Buttons>

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
