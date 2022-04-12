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
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 5px 0;
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

  @media (max-width: ${breakpoints.small}) {
    ${({ hideInMobile }) =>
      !!hideInMobile &&
      css`
        visibility: hidden;
      `}
  }
`

export const HeadingLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
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
    z-index: 3;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.violet};
    flex-direction: column;
    align-items: end;
    right: -17rem;
    top: -4.5rem;
    transition: right 0.5s ease;

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
  z-index: 2;

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
