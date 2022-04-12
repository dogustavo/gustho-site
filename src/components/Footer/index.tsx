import Link from 'next/link'
import { Container } from 'components'

import * as S from './styles'

const footerData = {
  title: 'Institucional',
  items: [
    {
      text: 'Políticas de Privacidade',
      link: '/'
    },
    {
      text: 'Código de Conduta Ética',
      link: '/'
    },
    {
      text: 'Código de Defesa do Consumidor',
      link: '/'
    },
    {
      text: 'Trabalhe Conosco',
      link: '/'
    }
  ]
}

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <div>
            <img src="/static/img/logo.svg" alt="Logo da loja Gustho" />

            <S.Information>
              <p>Endereço:</p>
              <p>
                Rua Lorem Ipsum, 000 - Centro
                <br />
                Itapetininga/SP
              </p>
            </S.Information>
          </div>

          <S.List>
            <p>{footerData.title}</p>
            {footerData.items.map((item, id) => (
              <li key={id}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </S.List>
        </S.Wrapper>
      </Container>
      <S.FooterLine>
        <p>© {new Date().getFullYear()} by Gustho</p>
      </S.FooterLine>
    </S.Footer>
  )
}
