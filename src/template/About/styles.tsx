import styled from 'styled-components'

export const Article = styled.article`
  padding: 7rem 0;
`

export const Business = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;

  img {
    width: 33rem;
    box-shadow: -10px 10px 0px 0px #2b3cab;
    border-radius: 8px;
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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.colors.shade.text};
  }
`
