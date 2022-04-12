import { Container } from 'components'
import Link from 'next/link'

import * as S from './styles'

interface ITitle {
  title: string
  breadcrumbs: Breadcrumbs[]
}

interface Breadcrumbs {
  route: string
  url: string
}

export default function Title({ title, breadcrumbs }: ITitle) {
  const renderBreadcrumbs = () =>
    breadcrumbs.map((breadcrumb, id) => (
      <Link href={breadcrumb.url} key={id}>
        <a>{breadcrumb.route}</a>
      </Link>
    ))

  return (
    <S.Title>
      <Container>
        <S.Wrapper>
          <h1>{title}</h1>

          <S.Breadcrumbs>{renderBreadcrumbs()}</S.Breadcrumbs>
        </S.Wrapper>
      </Container>
    </S.Title>
  )
}
