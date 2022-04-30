import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 7rem 0;

  gap: 4rem;

  img {
    width: 55rem;
  }

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    padding: 0.8rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.pink};
    transition: background 0.5s ease;
    border-radius: 5px;

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.offBlue};
      }
    }
  }

  @media (max-width: ${breakpoints.small}) {
    img {
      width: 100%;
    }
  }
`
