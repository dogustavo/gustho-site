import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'

import { IBreadcrumbs, IProductDetalied } from 'types'

import * as S from './styles'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  product: IProductDetalied
}

export default function Produto({ breadcrumbs, product }: IProps) {
  console.log(product)
  return (
    <LayoutDefault session={'Produto'}>
      <Title title={product.name} breadcrumbs={breadcrumbs} />
      <article></article>

      <S.Description>
        <Container>
          <h2>Descrição</h2>

          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </Container>
      </S.Description>
    </LayoutDefault>
  )
}
