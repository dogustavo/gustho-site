import styled from 'styled-components'
import { breakpoints, containers } from 'styles'

export const Container = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  flex: 1;
  color: ${({ theme }) => theme.colors.offBlue};

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: ${containers.medium};
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: ${containers.large};
  }

  @media screen and (min-width: ${breakpoints.huge}) {
    max-width: ${containers.huge};
  }
`
