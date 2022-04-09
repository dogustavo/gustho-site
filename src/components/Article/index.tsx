import { Container } from 'components'

import * as S from './styles'

type ITemplate = {
  children: JSX.Element
}

export default function Article({ children }: ITemplate) {
  return (
    <S.Products>
      <Container>{children}</Container>
    </S.Products>
  )
}
