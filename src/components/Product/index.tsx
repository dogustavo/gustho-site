import Link from 'next/link'
import { convertMonetary, priceDivided } from 'utils'

import * as S from './styles'

interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image_url: string
}

export default function Product(product: IProduct) {
  return (
    <S.Product>
      <S.Cart onClick={() => alert('Adicionado ao carrinho')}>
        <img
          src="/static/img/cart_dark.svg"
          alt="icone para adicionar ao carinho"
        />
      </S.Cart>
      <Link href={`/produto/${product.slug}`}>
        <S.Card>
          <S.Image src={product.image_url} alt={`Produto ${product.name}`} />

          <S.Wrapper>
            <S.Name>{product.name}</S.Name>
            <div>
              <S.Price>{convertMonetary(product.price)}</S.Price>
              <p>{priceDivided(product.price, 6)}</p>
            </div>

            <S.Description>{product.description}</S.Description>
          </S.Wrapper>
        </S.Card>
      </Link>
    </S.Product>
  )
}