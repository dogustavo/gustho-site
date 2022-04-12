import { Container, Product } from 'components'
import { IProduct } from 'types'

import * as S from './styles'

interface IProducts {
  products: IProduct[]
}

export default function List({ products }: IProducts) {
  const renderProductsList = () => {
    return products.map((product) => <Product {...product} key={product.id} />)
  }

  return (
    <article>
      <Container>
        <S.Wrapper>{renderProductsList()}</S.Wrapper>
      </Container>
    </article>
  )
}
