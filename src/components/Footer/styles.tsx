import styled from 'styled-components'

export const Footer = styled.footer`
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.colors.shade};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 7rem;
`

export const List = styled.ul`
  li {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    margin-bottom: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.subText};
    transition: color 0.4s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`
