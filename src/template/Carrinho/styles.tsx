import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  padding: 7rem 0;

  display: grid;
  grid-template-columns: 65% 1fr;
  grid-gap: 4rem;
  align-items: flex-start;

  @media (max-width: ${breakpoints.small}) {
    padding: 4rem 0;
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
  }
`

export const Total = styled.div`
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.2rem;

    color: ${({ theme }) => theme.colors.offBlue};
    margin-bottom: 2rem;
  }
`

export const Empty = styled.div`
  padding: 7rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 2.25rem;
    width: 10rem;
  }

  h3 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.25rem;

    text-align: center;

    color: ${({ theme }) => theme.colors.black};
  }

  a {
    margin-top: 1rem;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 4rem 0;
  }
`
