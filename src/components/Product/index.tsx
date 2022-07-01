import Link from 'next/link'
import { convertMonetary } from 'utils'

import * as S from './styles'

import { IProduct } from 'types'
import { useCheckout } from 'models/checkout/hooks'
import { useNotification } from 'models/notification/hooks'

export default function Product(product: IProduct) {
  const { addToCart } = useCheckout()
  const { sendNotification } = useNotification()

  const handleAddToCart = (data: IProduct) => {
    const { id, name, shortDescription, avaliable, imgUrl, price } = data

    addToCart({
      id,
      name,
      shortDescription,
      price,
      avaliable,
      imgUrl,
      quantity: 1
    })

    sendNotification({
      show: true,
      message: `${data.name} foi adicionado ao seu carrinho!`,
      type: 'success'
    })
  }

  return (
    <S.Product>
      <S.Cart onClick={() => handleAddToCart(product)}>
        <img
          src="/static/img/cart_dark.svg"
          alt="icone para adicionar ao carinho"
        />
      </S.Cart>
      <Link href={`/produtos/${product.id}`}>
        <S.Card>
          <S.Image>
            <img
              src={`https://gustho.nishiduka.dev/${product.imgUrl}`}
              alt={`Produto ${product.name}`}
            />
          </S.Image>

          <S.Wrapper>
            <S.Name>{product.name}</S.Name>
            <div>
              <S.Price>{convertMonetary(product.price)}</S.Price>
            </div>

            <S.Description>
              {product.shortDescription.split(';')[0]}
            </S.Description>
          </S.Wrapper>
        </S.Card>
      </Link>
    </S.Product>
  )
}
