import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  gap: 2rem;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: none;
  align-items: center;
  grid-gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.2rem;
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.offBlue};
  }

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: none;
    grid-template-rows: 1fr auto auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  padding: 2rem 0;

  @media (max-width: ${breakpoints.small}) {
    padding: 1rem 1rem;
    align-items: flex-end;

    div {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      text-align: right;
      gap: 0.8rem;
    }
  }
`

export const Image = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    object-fit: contain;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;

  img {
    width: 18px;
  }
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2rem;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.offBlue};

  padding: 0 1rem 2rem 1rem;
  margin: 0;

  @media (max-width: ${breakpoints.small}) {
    text-align: right;
  }
`
