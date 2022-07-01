import { ReactNode, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { Container, Menu } from 'components'

import * as S from './styles'
import { useWindowSize } from 'hooks'
import { useCheckout } from 'models/checkout/hooks'
import { useAuth } from 'models'

interface IButtons {
  children: ReactNode
  icon: string
  alt: string
  hideInMobile?: boolean
}
interface ILogin {
  isOpen: boolean
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

const LoginButton = ({ isOpen }: ILogin) => (
  <S.Login isOpen={isOpen}>
    <p>Bem-Vindo ao Gustho</p>
    <div>
      <Link href="/auth">
        <a>
          <S.HeadingLink>Entrar</S.HeadingLink>
        </a>
      </Link>
      <Link href="/auth/criar">
        <a>
          <S.HeadingLink>Cadastrar</S.HeadingLink>
        </a>
      </Link>
    </div>
  </S.Login>
)

export default function Header() {
  const width = useWindowSize()
  const { isAuth, unautorize } = useAuth()
  const { getAllCartItems, cart } = useCheckout()

  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [cartQty, setCartQty] = useState(0)

  const handleCartItems = useCallback(async () => {
    if (cart) {
      setCartQty(cart.length)
    }
  }, [cart])

  useEffect(() => {
    handleCartItems()
  }, [handleCartItems])

  useEffect(() => {
    getAllCartItems()
  }, [getAllCartItems])

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
              <Link href="/carrinho">
                <a>
                  <HeadingButton
                    icon="/static/img/cart.svg"
                    alt="Ícone de carrinho"
                  >
                    <S.HeadingLink>
                      <S.Cart>
                        <p>Carrinho</p>

                        <div>
                          <p>{cartQty}</p>
                        </div>
                      </S.Cart>
                    </S.HeadingLink>
                  </HeadingButton>
                </a>
              </Link>
              {!isAuth ? (
                <S.LoginWrapper>
                  <S.HeaderButton onClick={() => setLoginOpen(!loginOpen)}>
                    <HeadingButton
                      icon="/static/img/user.svg"
                      alt="Ícone de usuário"
                    >
                      <S.HeadingLink>Login</S.HeadingLink>
                    </HeadingButton>
                  </S.HeaderButton>

                  <LoginButton isOpen={loginOpen} />
                </S.LoginWrapper>
              ) : (
                <button type="button" onClick={() => unautorize()}>
                  <HeadingButton
                    icon="/static/img/log-out.svg"
                    alt="Ícone de sair"
                  >
                    <S.HeadingLink>Sair</S.HeadingLink>
                  </HeadingButton>
                </button>
              )}
            </S.Wrapper>
          </S.HeadingBarWrapper>
        </Container>
      </S.HeadingBar>

      <Container>
        <S.NavWrapper>
          <Link href="/">
            <a>
              <img src="/static/img/logo.svg" alt="Logo da loja Gustho" />
            </a>
          </Link>

          {width < 450 && (
            <Menu isOpen={menuOpen} action={() => setMenuOpen(!menuOpen)} />
          )}

          <S.Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

          <S.Nav isOpen={menuOpen}>
            <Link href="/">
              <a>Início</a>
            </Link>
            <Link href="/produtos">
              <a>Produtos</a>
            </Link>
            <Link href="/sobre">
              <a>Sobre nós</a>
            </Link>
          </S.Nav>
        </S.NavWrapper>
      </Container>
    </header>
  )
}
