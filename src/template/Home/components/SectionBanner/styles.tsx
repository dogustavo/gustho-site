import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 50vh;
`

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  z-index: 2;

  h2 {
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 155%;
    text-align: center;
    color: ${({ theme }) => theme.colors.offBlue};

    @media (max-width: ${breakpoints.small}) {
      font-size: 1.4rem;
    }
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
`
