import { LayoutDefault } from 'layout'
import { Title, Container, Button } from 'components'
import { convertMonetary } from 'utils'

import { IBreadcrumbs, IProductDetalied } from 'types'

import * as S from './styles'
import { useState } from 'react'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  product: IProductDetalied
}

export default function Produto({ breadcrumbs, product }: IProps) {
  const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <LayoutDefault session={'Produto'}>
      <Title title={product.name} breadcrumbs={breadcrumbs} />
      <Container>
        <S.WrappProduct>
          <S.Product>
            <S.Gallery>
              <S.Aside>
                {product.images.map((image, id) => (
                  <S.Image
                    key={id}
                    onClick={() => setMainImage(image)}
                    selected={mainImage === image}
                  >
                    <img
                      src={image}
                      alt={`imagem número ${id + 1} da galeria`}
                    />
                  </S.Image>
                ))}
              </S.Aside>

              <S.MainImage>
                <img src={mainImage} alt="Imagem principal da galeria" />
              </S.MainImage>
            </S.Gallery>

            <S.Details>
              <S.Wrapper>
                <span>{product.quantity} produtos restante</span>
                <h3>{product.name}</h3>
                <p>{convertMonetary(product.price)}</p>
              </S.Wrapper>

              <S.DetailsList>
                <p>
                  <strong>O que você precisa saber sobre este produto</strong>
                </p>
                <ul
                  dangerouslySetInnerHTML={{
                    __html: product.short_description
                  }}
                />
              </S.DetailsList>

              <S.Buttons>
                <Button types="secundary">Adicionar ao carrinho</Button>
                <Button types="primary">Compre agora</Button>
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
