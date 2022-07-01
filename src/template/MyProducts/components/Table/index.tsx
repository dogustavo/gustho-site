import { convertMonetary } from 'utils'
import * as S from './styles'

import { IOrder } from 'types'

interface IProps {
  data: IOrder[]
}
interface ITable {
  id: number
  status: string
  name: string
  price: number
  total: number
}

interface TypeOptions {
  [key: string]: string
}

const status: TypeOptions = {
  paid: 'Pago'
}

export default function Table({ data }: IProps) {
  const renderTableRow = (cart: ITable) => {
    return (
      <tr key={cart.id}>
        <S.TD>
          <S.Product>
            <p>{cart.name}</p>
          </S.Product>
        </S.TD>
        <S.TD>{convertMonetary(cart.price)}</S.TD>
        <S.TD>{status[cart.status] || 'FINALIZADO'}</S.TD>
      </tr>
    )
  }

  const rederTableBody = () => {
    return data
      .reduce((acc: any, el): ITable[] => {
        if (el.products) {
          acc.push(
            el.products.map((product) => {
              return {
                id: product.id,
                status: el.status,
                name: product.name,
                price: product.price,
                total: el.total
              }
            })
          )
        }

        return acc
      }, [])
      .flat()
      .map((el: ITable) => renderTableRow(el))
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
