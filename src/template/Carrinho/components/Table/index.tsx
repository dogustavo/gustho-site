import { useCheckout } from 'models/checkout/hooks'
import { IProduct } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: IProduct[]
}

export default function Table({ data }: IProps) {
  const { removeCartItem } = useCheckout()

  const rederContent = () => {
    return data?.map((cart) => (
      <S.Content key={cart.id}>
        <S.Body>
          <S.Image>
            <img
              src={`https://gustho.nishiduka.dev/${cart.imgUrl}`}
              alt={`Produto ${cart.name}`}
            />
          </S.Image>
          <S.Wrapper>
            <h3>{cart.name}</h3>

            <div>
              <p>{cart.shortDescription.split(';')[0]}</p>
              <p>quantidade: {cart.quantity}</p>
            </div>

            <S.Button onClick={() => removeCartItem(cart.id.toString())}>
              <img src="/static/img/trash.svg" alt="Icone de lata de lixo" />
            </S.Button>
          </S.Wrapper>
          <S.Price>{convertMonetary(cart.price)}</S.Price>
        </S.Body>
      </S.Content>
    ))
  }

  return <S.Container>{rederContent()}</S.Container>
}
