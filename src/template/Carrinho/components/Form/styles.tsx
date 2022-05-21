import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Container = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;

  @media (max-width: ${breakpoints.small}) {
    padding: 1rem 0.8rem;
  }
`

export const Form = styled.form`
  margin-top: 1rem;
`

export const Zipcode = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  position: relative;

  p {
    color: ${({ theme }) => theme.colors.red};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`
