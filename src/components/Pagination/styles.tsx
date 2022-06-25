import styled, { css } from 'styled-components'

interface IProp {
  active?: boolean
}

const flexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Content = styled.div`
  padding: 0.8rem 1.5rem;
  border-radius: 0.8rem;
`

export const Page = styled.div<IProp>`
  height: 30px;
  width: 30px;

  background-color: ${({ theme }) => theme.colors.shade.dark};
  cursor: pointer;
  border-radius: 0.8rem;
  ${flexBox}

  p {
    line-height: 0;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.violet};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    `}
`
