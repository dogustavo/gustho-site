import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

const sharedText = css`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`

export const Footer = styled.footer`
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.colors.shade.dark};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 7rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`

export const Information = styled.div`
  margin-top: 1.2rem;

  p {
    ${sharedText}
    color: ${({ theme }) => theme.colors.subText};
    margin-bottom: 5px;
    line-height: 14px;

    @media (max-width: ${breakpoints.small}) {
      line-height: 18px;
    }
  }
`

export const List = styled.ul`
  text-align: right;

  @media (max-width: ${breakpoints.small}) {
    text-align: left;
  }

  p {
    font-style: italic;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.3rem;
    margin-bottom: 2.2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  li {
    ${sharedText}
    margin-bottom: 1.2rem;
    line-height: 19px;
  }

  a {
    color: ${({ theme }) => theme.colors.subText};
    transition: color 0.4s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`

export const FooterLine = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.shade.light};

  p {
    ${sharedText}
    color: ${({ theme }) => theme.colors.subText};
  }
`
