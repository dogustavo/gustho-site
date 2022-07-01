import { Product } from 'components'

import * as S from './styles'
import { Article } from 'components'
import { IProduct } from 'types'

interface IProducts {
  products: IProduct[] | undefined
}

export default function FeaturedProducts({ products }: IProducts) {
  const renderProductsList = () => {
    return products?.map((product) => <Product {...product} key={product.id} />)
  }

  return (
    <Article>
      <h2>Produtos Selecionados</h2>
      <S.Wrapper>{renderProductsList()}</S.Wrapper>
    </Article>
  )
}
