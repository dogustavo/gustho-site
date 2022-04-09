import styled from 'styled-components'

export const Products = styled.article`
  padding: 4rem 0;

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 2.6rem;
    margin-bottom: 3rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
`
