import { useCheckout } from 'models/checkout/hooks'
import { IProduct } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: IProduct[]
}

export default function Table({ data }: IProps) {
  const { removeCartItem } = useCheckout()

  const renderTableRow = (cart: IProduct) => {
    return (
      <tr key={cart.id}>
        <S.TD>
          <S.Product>
            <S.Image>
              <img
                src={`https://gustho.nishiduka.dev/${cart.imgUrl}`}
                alt={`Produto ${cart.name}`}
              />
            </S.Image>
            <p>{cart.name}</p>
          </S.Product>
        </S.TD>
        <S.TD>{cart.quantity}</S.TD>
        <S.TD>{convertMonetary(23 * cart.quantity)}</S.TD>
        <S.TD>
          <button onClick={() => removeCartItem(cart.id.toString())}>
            <img src="/static/img/trash.svg" alt="Icone de lata de lixo" />{' '}
          </button>
        </S.TD>
      </tr>
    )
  }

  const rederTableBody = () => {
    return data?.map((cart) => renderTableRow(cart))
  }

  return (
    <S.Container>
      <thead>
        <tr>
          <S.TH>Produto</S.TH>
          <S.TH>Quantidade</S.TH>
          <S.TH>Valor</S.TH>
          <th />
        </tr>
      </thead>
      <tbody>{rederTableBody()}</tbody>
    </S.Container>
  )
}
