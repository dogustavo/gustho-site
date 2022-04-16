import styled from 'styled-components'

export const Description = styled.article`
  background-color: ${({ theme }) => theme.colors.shade.light};
  padding: 7rem 0;

  margin-top: 3rem;

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;

    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.offBlue};

    margin-bottom: 3.5rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.colors.shade.text};
    margin-bottom: 2rem;
  }
`
