import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  padding: 7rem 0;
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: 100%;
  }
`

export const Filter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const Form = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;

  form {
    width: 25rem;
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`

export const Loading = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
