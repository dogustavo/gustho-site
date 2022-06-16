import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.shade.light};
  border-radius: 5px;
  padding: 2rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.shade.dark};
  margin-bottom: 2rem;

  padding: 13px 0;

  p,
  span {
    font-family: 'Lato';
    font-style: normal;
    color: ${({ theme }) => theme.colors.offBlue};
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`

export const ModalWrapper = styled.div`
  margin-bottom: 2rem;
`

export const Text = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
`
