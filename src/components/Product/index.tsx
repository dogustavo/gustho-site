import Link from 'next/link'
import { convertMonetary, priceDivided } from 'utils'

import * as S from './styles'

import { IProduct } from 'types'
import { useCheckout } from 'models/checkout/hooks'

export default function Product(product: IProduct) {
  const { addToCart } = useCheckout()

  const handleAddToCart = (data: IProduct) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description, ...rest } = data
    alert('Adicionado')

    addToCart(rest)
  }

  return (
    <S.Product>
      <S.Cart onClick={() => handleAddToCart(product)}>
        <img
          src="/static/img/cart_dark.svg"
          alt="icone para adicionar ao carinho"
        />
      </S.Cart>
      <Link href={`/produtos/${product.slug}`}>
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
