import { Container } from 'components'
import { LayoutDefault } from 'layout'
import Link from 'next/link'

import * as S from './styles'

export default function NotFound() {
  return (
    <LayoutDefault session="Não encontrado">
      <article>
        <Container>
          <S.Wrapper>
            <img
              src="/static/img/404.svg"
              alt="imagem 404 página não encotrada"
            />

            <p>Essa não é a página pela qual você está procurando</p>

            <Link href="/">
              <a>Voltar para Ínicio</a>
            </Link>
          </S.Wrapper>
        </Container>
      </article>
    </LayoutDefault>
  )
}
