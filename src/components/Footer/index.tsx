import Link from 'next/link'
import { Container } from 'components'

import * as S from './styles'

const footerItens = [
  {
    text: 'Lorem ipsum',
    link: '/'
  },
  {
    text: 'Lorem ipsum dolor',
    link: '/'
  },
  {
    text: 'Lorem ipsum',
    link: '/'
  },
  {
    text: 'Lorem ipsum dolor sit',
    link: '/'
  }
]

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <div>
            <img src="/static/img/logo.svg" alt="Logo da loja Gustho" />
            <p>Contato</p>
            <p>00 Lorem Ipsum, Lorem Ipsum Dolor, BR</p>
          </div>

          <S.List>
            {footerItens.map((item, id) => (
              <li key={id}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </S.List>
        </S.Wrapper>
      </Container>
    </S.Footer>
  )
}
