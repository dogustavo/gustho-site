import { ICart } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: ICart[]
}

export default function Table({ data }: IProps) {
  const renderTableRow = (cart: ICart) => {
    return (
      <tr key={cart.id}>
        <S.TD>
          <S.Product>
            <S.Image>
              <img src={cart.image_url} alt={`Produto ${cart.name}`} />
            </S.Image>
            <p>{cart.name}</p>
          </S.Product>
        </S.TD>
        <S.TD>{convertMonetary(cart.price)}</S.TD>
        <S.TD>
          <button onClick={() => alert(`Limpando id ${cart.id}`)}>
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
          <S.TH>Valor</S.TH>
          <th />
        </tr>
      </thead>
      <tbody>{rederTableBody()}</tbody>
    </S.Container>
  )
}
