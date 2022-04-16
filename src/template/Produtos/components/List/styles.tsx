import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  padding: 7rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 4rem;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`

export const Filter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  div {
    width: 25rem;
    display: flex;
  }

  button {
    background-color: ${({ theme }) => theme.colors.pink};
    transition: background 0.3s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.offBlue};
    }

    img {
      padding: 0.5rem 0.8rem;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    div {
      width: 100%;
    }
  }
`
