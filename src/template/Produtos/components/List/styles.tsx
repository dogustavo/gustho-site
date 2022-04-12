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
