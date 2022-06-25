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
    const { id, name, shortDescription, avaliable, imgUrl } = data

    sendNotification({
      show: true,
      message: `${data.name} foi adicionado ao seu carrinho!`,
      type: 'success'
    })

    addToCart({
      id,
      name,
      shortDescription,
      avaliable,
      imgUrl
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
              <S.Price>{convertMonetary(12)}</S.Price>
            </div>

            <S.Description>{product.shortDescription}</S.Description>
          </S.Wrapper>
        </S.Card>
      </Link>
    </S.Product>
  )
}
