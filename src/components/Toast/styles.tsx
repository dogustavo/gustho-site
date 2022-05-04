import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

interface INotification {
  type: string
  show: boolean
}

interface TypeOptions {
  [key: string]: string
}

const handleToastType = (type: string) => {
  const types: TypeOptions = {
    success: '#5cb85c',
    danger: '#d9534f',
    info: '#5bc0de',
    warning: '#f0ad4e'
  }

  return types[type]
}

export const Notification = styled.div<INotification>`
  background-color: ${({ type }) => handleToastType(type)};
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: 10;
  top: 5rem;
  right: 0;
  transform: translateX(100%);
  padding: 2rem;
  opacity: 0;
  overflow: hidden;
  border-radius: 8px 0 0 8px;

  transition: transform, opacity;
  transition-duration: 0.5s, 0.7s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: ${breakpoints.small}) {
    width: 80%;
  }

  ${({ show }) =>
    !!show &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`
