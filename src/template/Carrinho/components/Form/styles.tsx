import styled from 'styled-components'

export const Form = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors.pink};
    transition: background 0.3s ease;
    height: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.offBlue};
    }

    img {
      padding: 0.5rem 0.8rem;
    }
  }
`

export const FormContainer = styled.div``
