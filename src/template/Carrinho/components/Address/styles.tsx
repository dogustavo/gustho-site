import styled from 'styled-components'
import { breakpoints } from 'styles'

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
