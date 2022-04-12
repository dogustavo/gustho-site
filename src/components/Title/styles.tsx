import styled from 'styled-components'

export const Title = styled.section`
  background-color: ${({ theme }) => theme.colors.shade.light};
`

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  height: 18rem;

  justify-content: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Breadcrumbs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 10px;

  a {
    position: relative;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    color: ${({ theme }) => theme.colors.black};

    &::after {
      content: '|';
      position: absolute;
      right: -0.7rem;
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.pink};

      &::after {
        display: none;
      }
    }
  }
`
