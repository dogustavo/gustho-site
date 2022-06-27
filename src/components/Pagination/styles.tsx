import styled, { css } from 'styled-components'

interface IProp {
  active?: boolean
}

interface IButtonProp {
  reverted?: boolean
}

const flexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const generalButton = css`
  height: 30px;
  width: 30px;

  background-color: ${({ theme }) => theme.colors.shade.dark};
  cursor: pointer;
  border-radius: 0.8rem;
  ${flexBox}
`

export const Container = styled.div`
  width: 100%;

  ${flexBox}
  gap: 1rem;

  margin: 1.5rem 0;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.3rem;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.shade.dark};

  ${flexBox}
  gap: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.8rem;
`

export const Page = styled.div<IProp>`
  ${generalButton}

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.violet};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    `}
`

export const Button = styled.button<IButtonProp>`
  ${generalButton}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ reverted }) =>
    reverted &&
    css`
      transform: rotate(180deg);
    `}
`
