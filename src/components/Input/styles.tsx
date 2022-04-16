import styled, { css } from 'styled-components'

interface IFocus {
  isFocused: boolean
  hasError: boolean
}

const communTex = css`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;

  color: ${({ theme }) => theme.colors.black};
`

export const Label = styled.label`
  ${communTex}
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: top 0.3s ease;
`

export const Input = styled.input`
  ${communTex}
  padding: 1rem;
  padding-top: 1.4rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.shade.dark};
  box-sizing: border-box;
  border-radius: 2px;

  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`

export const Content = styled.div<IFocus>`
  position: relative;
  width: 100%;

  ${({ isFocused, hasError, theme }) =>
    isFocused &&
    css`
      ${Label} {
        opacity: 1;
        visibility: visible;
        top: 0.8rem;
        color: ${hasError ? theme.colors.red : theme.colors.blue};
      }

      ${Input} {
        border-color: ${hasError ? theme.colors.red : theme.colors.violet};
      }
    `}
`

export const Error = styled.p`
  ${communTex}
  text-align: right;
  color: ${({ theme }) => theme.colors.red};
`
