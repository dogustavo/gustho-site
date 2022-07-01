import { LayoutDefault } from 'layout'
import { Title, Container, Button } from 'components'
import { convertMonetary } from 'utils'

import { IBreadcrumbs, IProductDetalied } from 'types'

import * as S from './styles'
import { useState } from 'react'
import { useCheckout } from 'models/checkout/hooks'
import { sendNotification } from 'models/notification/actions'

import { useRouter } from 'next/router'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  product: IProductDetalied
}

interface ISumbit {
  data: IProductDetalied
  type: 'sumbit' | 'cart'
}

export default function Produto({ breadcrumbs, product }: IProps) {
  const router = useRouter()

  const [mainImage, setMainImage] = useState(product?.media[0]?.path)

  const { addToCart } = useCheckout()

  const handleAddToCart = ({ data, type }: ISumbit) => {
    const { id, name, shortDescription, media, price, avaliable } = data

    addToCart({
      id: parseInt(id),
      name,
      shortDescription,
      price,
      avaliable,
      imgUrl: media[0].path,
      quantity: 1
    })

    if (type === 'cart') {
      sendNotification({
        show: true,
        message: `${data.name} foi adicionado ao seu carrinho!`,
        type: 'success'
      })

      return
    }

    router.push('/carrinho')
  }

  return (
    <LayoutDefault session={'Produto'}>
      <Title title={product.name} breadcrumbs={breadcrumbs} />
      <Container>
        <S.WrappProduct>
          <S.Product>
            <S.Gallery>
              <S.Aside>
                {product.media.map((image) => (
                  <S.Image
                    key={image.id}
                    onClick={() => setMainImage(image.path)}
                    selected={mainImage === image.path}
                  >
                    <img
                      src={`https://gustho.nishiduka.dev/${image.path}`}
                      alt={`imagem número ${image.id + 1} da galeria`}
                    />
                  </S.Image>
                ))}
              </S.Aside>

              <S.MainImage>
                <img
                  src={`https://gustho.nishiduka.dev/${mainImage}`}
                  alt="Imagem principal da galeria"
                />
              </S.MainImage>
            </S.Gallery>

            <S.Details>
              <S.Wrapper>
                <span>{product.avaliable} produtos restante</span>
                <h3>{product.name}</h3>
                <p>{convertMonetary(product.price)}</p>
              </S.Wrapper>

              <S.DetailsList>
                <p>
                  <strong>O que você precisa saber sobre este produto</strong>
                </p>
                <ul>
                  {product.shortDescription.split(';').map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </S.DetailsList>

              <S.Buttons>
                <Button
                  title="primary"
                  onClick={() =>
                    handleAddToCart({ data: product, type: 'cart' })
                  }
                >
                  Adicionar ao carrinho
                </Button>

                <Button
                  title="submit"
                  onClick={() =>
                    handleAddToCart({ data: product, type: 'sumbit' })
                  }
                >
                  Compre agora
                </Button>
              </S.Buttons>
            </S.Details>
          </S.Product>
        </S.WrappProduct>
      </Container>

      <S.Description>
        <Container>
          <h2>Descrição</h2>

          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </Container>
      </S.Description>
    </LayoutDefault>
  )
}
