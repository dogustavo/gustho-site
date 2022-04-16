import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 7rem 0;
  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;

    color: ${({ theme }) => theme.colors.subText};
    margin-bottom: 2.5rem;
  }
`
