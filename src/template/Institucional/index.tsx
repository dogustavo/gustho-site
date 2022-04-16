import { useEffect } from 'react'
import { LayoutDefault } from 'layout'
import { Title, Container } from 'components'
import { IBreadcrumbs } from 'types'

import * as S from './styles'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  institutional: {
    name: string
    content: string
  }
}

export default function Institucional({ breadcrumbs, institutional }: IProps) {
  useEffect(() => {
    if (window.scrollY) {
      window.scroll(0, 0)
    }
  }, [])

  return (
    <LayoutDefault session={institutional.name}>
      <Title title={institutional.name} breadcrumbs={breadcrumbs} />
      <Container>
        <S.Wrapper
          dangerouslySetInnerHTML={{ __html: institutional.content }}
        />
      </Container>
    </LayoutDefault>
  )
}
