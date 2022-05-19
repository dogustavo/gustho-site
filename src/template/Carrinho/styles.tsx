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

export const Address = styled.div`
  background-color: ${({ theme }) => theme.colors.shade.light};
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`

export const NoAddress = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 2rem;
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
