import { IProduct } from 'types'
import { convertMonetary } from 'utils'
import * as S from './styles'

interface IProps {
  data: IProduct[]
}

//TODO - Preço do produto está atualmente mockado
export default function Table({ data }: IProps) {
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
        <S.TD>{convertMonetary(18)}</S.TD>
        <S.TD>FINALIZADO</S.TD>
      </tr>
    )
  }

  const rederTableBody = () => {
    return data?.map((cart) => renderTableRow(cart))
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.TH>Pedidos</S.TH>
            <S.TH>Valor Pago</S.TH>
            <S.TH>Status</S.TH>
          </tr>
        </thead>
        <tbody>{rederTableBody()}</tbody>
      </S.Table>
    </S.Container>
  )
}
