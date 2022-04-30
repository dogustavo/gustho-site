import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

const sharedDisplay = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 17rem);
  justify-content: center;
  justify-items: center;
  grid-gap: 1.5rem;

  @media (max-width: ${breakpoints.small}) {
    justify-content: flex-start;
    grid-template-columns: repeat(4, 270px);
    width: 100%;
    padding: 20px;
    overflow-x: scroll;

    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Card = styled.div`
  ${sharedDisplay}
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);
`

export const CardDesc = styled.div`
  ${sharedDisplay}
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.2rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  line-height: 1.2rem;
`
export const CardTitle = styled.p`
  font-family: 'Josefin Sans';
  font-style: italic;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3rem;
`
