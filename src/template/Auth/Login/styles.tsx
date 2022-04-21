import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

const commonDisplay = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const commonText = css`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;

  color: ${({ theme }) => theme.colors.shade.text};
`

export const Wrapper = styled.div`
  ${commonDisplay}
  width: 100%;
  margin: 7.5rem 0;

  @media (max-width: ${breakpoints.small}) {
    margin: 2rem 0;
  }
`

export const Form = styled.form`
  ${commonDisplay}
  width: 34rem;
  padding: 3rem;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.small}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const FormHeader = styled.div`
  ${commonDisplay}
  flex-direction: column;
  gap: 5px;
  margin-bottom: 2.5rem;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    ${commonText}
    text-align: center;
  }

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 1rem;
  }
`

export const Inputs = styled.div`
  ${commonDisplay}
  flex-direction: column;
  width: 100%;
  gap: 1.4rem;
  margin-bottom: 0.8rem;
`

export const Action = styled.a`
  ${commonText}
  align-self: flex-start;
  margin-bottom: 1.4rem;
  transition: color 0.3s ease;

  &:last-child {
    align-self: center;
    margin-top: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`
