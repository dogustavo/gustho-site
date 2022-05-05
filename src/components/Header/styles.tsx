import styled, { css } from 'styled-components'

import { breakpoints } from 'styles'

interface IWrapper {
  gap: number
  hideInMobile?: boolean
}
interface IMenu {
  isOpen: boolean
}

const baseDispleyStyles = css`
  display: flex;
  align-items: center;
`

export const HeadingBar = styled.div`
  min-height: 2rem;
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 0.4rem 0;
  font-family: 'Josefin Sans', sans-serif;
  font-style: italic;
  font-weight: 400;
`

export const HeadingBarWrapper = styled.div`
  ${baseDispleyStyles}
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${breakpoints.small}) {
    gap: 3rem;
  }
`

export const Wrapper = styled.div<IWrapper>`
  ${baseDispleyStyles}
  gap: ${({ gap }) => `${gap}rem`};
  z-index: 4;
  position: relative;

  img {
    width: 1.2rem;
  }

  @media (max-width: ${breakpoints.small}) {
    ${({ hideInMobile }) =>
      !!hideInMobile &&
      css`
        visibility: hidden;
      `}
  }
`

export const HeadingLink = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export const Cart = styled.div`
  ${baseDispleyStyles}
  gap: 8px;

  div {
    ${baseDispleyStyles}
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.white};
  }

  div > p {
    color: ${({ theme }) => theme.colors.violet};
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 10px;
  }
`

export const NavWrapper = styled(HeadingBarWrapper)`
  padding: 1.2rem 0;
  position: relative;

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s ease;
    white-space: pre;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`

export const Nav = styled.nav<IMenu>`
  gap: 1.5rem;
  display: flex;

  @media (max-width: ${breakpoints.small}) {
    position: absolute;
    height: 105vh;
    z-index: 2;
    width: 75%;
    background-color: ${({ theme }) => theme.colors.violet};
    flex-direction: column;
    align-items: end;
    right: -30rem;
    top: -4.5rem;
    transition: right 0.6s ease-in;

    padding-top: 10rem;
    padding-right: 1rem;

    a {
      color: ${({ theme }) => theme.colors.white};
    }

    ${({ isOpen }) =>
      !!isOpen &&
      css`
        right: -1rem;
      `}
  }
`

export const Overlay = styled.div<IMenu>`
  width: 100vw;
  height: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 1;

  overflow: hidden;
  top: 0;
  right: 0;
  opacity: 0;

  transition: opacity 0.4s ease;

  ${({ isOpen }) =>
    !!isOpen &&
    css`
      height: 100vh;
      opacity: 1;
    `}
`

export const LoginWrapper = styled.div`
  position: relative;
`

export const HeaderButton = styled.div`
  cursor: pointer;
`

export const Login = styled.div<IMenu>`
  position: absolute;
  z-index: 10;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.black};

  top: -10rem;
  right: 0;
  opacity: 0;

  transition: opacity 0.4s ease;

  padding: 1.3rem 1rem;

  ${({ isOpen }) =>
    !!isOpen &&
    css`
      top: 1.6rem;
      opacity: 1;
    `}

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  a {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
    margin-top: 28px;

    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;

    transition: background 0.5s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.offBlue};
    }
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border: 0.8rem solid transparent;
    border-top: 0;
    border-bottom: 1rem solid ${({ theme }) => theme.colors.white};
    position: absolute;
    top: -5px;
    right: 0;
  }

  @media (max-width: ${breakpoints.small}) {
    &::after {
      top: -10px;
    }
  }
`
