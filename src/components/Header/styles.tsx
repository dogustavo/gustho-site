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
    width: 70%;
    background-color: ${({ theme }) => theme.colors.violet};
    flex-direction: column;
    align-items: end;
    right: -17rem;
    top: 0;
    transition: right 0.5s ease;

    padding: 5rem;
    padding-right: 1rem;

    ${({ isOpen }) =>
      !!isOpen &&
      css`
        right: -1rem;
        top: 0;
      `}

    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Menu = styled.div<IMenu>`
  width: 28px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  right: 0;

  @media (max-width: ${breakpoints.small}) {
    span {
      background-color: ${({ theme }) => theme.colors.black};
      width: 100%;
      height: 2px;
      position: absolute;
      transition: top 0.3s ease;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        opacity: 1;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 18px;
        left: 0;
      }
    }

    ${({ isOpen }) =>
      !!isOpen &&
      css`
        span {
          background-color: ${({ theme }) => theme.colors.white};

          &:first-child {
            top: 10px;
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            top: 10px;
            transform: rotate(-45deg);
          }
        }
      `}
  }
`
