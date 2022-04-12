import React from 'react'
import { Container } from 'components'

import * as S from './styles'

type ITemplate = {
  children: React.ReactNode
}

export default function Article({ children }: ITemplate) {
  return (
    <S.Products>
      <Container>{children}</Container>
    </S.Products>
  )
}
