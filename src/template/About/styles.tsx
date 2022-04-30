import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

const sharedText = css`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.colors.shade.text};
`

export const Article = styled.article`
  padding: 7rem 0;
  padding-top: 2rem;
`

export const Text = styled.div`
  margin: 5rem 0;

  p {
    margin-bottom: 1rem;
    ${sharedText}
  }

  @media (max-width: ${breakpoints.small}) {
    margin: 0;
  }
`

export const Business = styled.div`
  display: grid;
  grid-template-columns: 32rem 42rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 3rem;

  &:nth-child(4) {
    margin: 5rem 0;
    grid-template-columns: 42rem 32rem;
  }

  img {
    width: 100%;
    box-shadow: -10px 10px 0px 0px #2b3cab;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: none;
    grid-template-rows: auto 1fr;

    &:nth-child(4) {
      grid-template-columns: none;
      grid-template-rows: 1fr auto;
    }
  }
`

export const About = styled.div`
  h3 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3rem;

    color: ${({ theme }) => theme.colors.offBlue};
    margin-bottom: 1rem;
  }

  p {
    ${sharedText}
  }
`
