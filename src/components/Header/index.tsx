import { ReactNode, useState } from 'react'
import Link from 'next/link'

import { Container, Menu } from 'components'

import * as S from './styles'
import { useWindowSize } from 'hooks'

interface IButtons {
  children: ReactNode
  icon: string
  alt: string
  hideInMobile?: boolean
}

const HeadingButton = ({
  children,
  icon,
  alt,
  hideInMobile = false
}: IButtons) => {
  return (
    <S.Wrapper hideInMobile={hideInMobile} gap={0.5}>
      <img src={icon} alt={alt} />
      {children}
    </S.Wrapper>
  )
}

export default function Header() {
  const width = useWindowSize()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <S.HeadingBar>
        <Container>
          <S.HeadingBarWrapper>
            <HeadingButton
              hideInMobile={true}
              icon="/static/img/phone.svg"
              alt="Ícone de telefone"
            >
              <p>(99) 99999-9999</p>
            </HeadingButton>

            <S.Wrapper gap={1.5}>
              <HeadingButton
                icon="/static/img/cart.svg"
                alt="Ícone de carrinho"
              >
                <Link href="/">
                  <S.HeadingLink>Carrinho</S.HeadingLink>
                </Link>
              </HeadingButton>
              <HeadingButton icon="/static/img/user.svg" alt="Ícone de usuário">
                <Link href="/">
                  <S.HeadingLink>Login</S.HeadingLink>
                </Link>
              </HeadingButton>
            </S.Wrapper>
          </S.HeadingBarWrapper>
        </Container>
      </S.HeadingBar>

      <Container>
        <S.NavWrapper>
          <img src="/static/img/logo.svg" alt="Logo da loja Gustho" />

          {width < 450 && (
            <Menu isOpen={menuOpen} action={() => setMenuOpen(!menuOpen)} />
          )}

          <S.Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

          <S.Nav isOpen={menuOpen}>
            <Link href="/">
              <a>Início</a>
            </Link>
            <Link href="/">
              <a>Produtos</a>
            </Link>
            <Link href="/">
              <a>Sobre nós</a>
            </Link>
            <Link href="/">
              <a>Contato</a>
            </Link>
          </S.Nav>
        </S.NavWrapper>
      </Container>
    </header>
  )
}
