import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
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
