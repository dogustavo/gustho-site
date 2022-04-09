import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

const baseDispleyStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Cart = styled.button`
  ${baseDispleyStyles}
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.shade};

  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease;
`

export const Wrapper = styled.div`
  ${baseDispleyStyles}
  gap: 14px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background 0.5s ease;

  div {
    align-self: flex-start;
  }
`

export const Name = styled.p`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.pink};
`
export const Price = styled.p`
  font-weight: 400;
  font-size: 24px;
`
export const Description = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};

  transition: 0.5s ease;

  opacity: 0;
  visibility: hidden;
`

export const Product = styled.div`
  position: relative;

  @media (hover: hover) {
    &:hover ${Wrapper} {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover ${Name} {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover ${Description} {
      color: ${({ theme }) => theme.colors.white};
      opacity: 1;
      visibility: visible;
    }

    &:hover ${Cart} {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const Card = styled.a`
  ${baseDispleyStyles}
  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 270px;

  @media (min-width: ${breakpoints.large}) {
    max-width: 330px;
  }
`

export const Image = styled.img`
  width: 100%;
`