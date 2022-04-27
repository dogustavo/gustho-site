import { Button } from 'components'
import { useCheckout } from 'models/checkout/hooks'
import { ICart } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: ICart[]
}

export default function Totals({ data }: IProps) {
  const { clearAllCartItems } = useCheckout()

  const handleTotalPrice = () => {
    const total = data?.reduce(
      (acc: number, current: ICart) => acc + current.price,
      0
    )

    return convertMonetary(total)
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
        <Button onClick={() => clearAllCartItems()}>Limpar carrinho</Button>
        <Button types="submit">Finalizar compra</Button>
      </S.Buttons>
    </S.Wrapper>
  )
}
