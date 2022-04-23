import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

interface IPic {
  selected: boolean
}

const generalDisplay = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const generalText = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.shade.text};
`

export const WrappProduct = styled.div`
  ${generalDisplay}
  margin: 3rem 0;
`

export const Product = styled.div`
  max-width: 90rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  @media (max-width: ${breakpoints.small}) {
    max-width: 100%;
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
    align-items: flex-start;
    grid-gap: 3.5rem;
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr;
  grid-gap: 21px;

  @media (max-width: ${breakpoints.small}) {
    max-width: 100%;
    grid-template-columns: none;
    grid-template-rows: 1fr auto;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: row;
    grid-row: 2;
  }
`

export const Image = styled.div<IPic>`
  height: 10rem;
  cursor: pointer;
  ${generalDisplay}

  img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.small}) {
    height: 100%;
  }

  ${({ selected }) =>
    !!selected &&
    css`
      border: 3px solid ${({ theme }) => theme.colors.pink};
    `}
`

export const MainImage = styled.div`
  width: 23rem;
  height: 30rem;
  ${generalDisplay}
  justify-self: center;

  img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    height: 15rem;
  }
`

export const Wrapper = styled.div`
  margin-bottom: 3rem;

  span {
    ${generalText}
  }

  h3 {
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 2.25rem;

    color: ${({ theme }) => theme.colors.offBlue};
    margin-bottom: 3rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;
    line-height: 2rem;
  }

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 1.5rem;

    h3 {
      margin-bottom: 1.5rem;
    }
  }
`

export const Details = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DetailsList = styled.div`
  ${generalText}
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.shade.text};

  p {
    color: ${({ theme }) => theme.colors.offBlue};
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 1.5rem;
  }
`

export const Description = styled.article`
  background-color: ${({ theme }) => theme.colors.shade.light};
  padding: 7rem 0;

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;

    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.offBlue};

    margin-bottom: 3.5rem;
  }

  p {
    ${generalText}
    margin-bottom: 2rem;
  }
`

export const Buttons = styled.div`
  ${generalDisplay}
  gap: 1rem;
  width: 100%;
  align-self: flex-end;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`
