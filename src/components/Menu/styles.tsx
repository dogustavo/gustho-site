import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

interface IMenu {
  isOpen: boolean
}

export const Menu = styled.div<IMenu>`
  width: 28px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  right: 0;

  @media (max-width: ${breakpoints.small}) {
    span {
      background-color: ${({ theme }) => theme.colors.black};
      width: 100%;
      height: 2px;
      position: absolute;
      transition: top 0.3s ease;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        opacity: 1;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 18px;
        left: 0;
      }
    }

    ${({ isOpen }) =>
      !!isOpen &&
      css`
        span {
          background-color: ${({ theme }) => theme.colors.white};

          &:first-child {
            top: 10px;
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            top: 10px;
            transform: rotate(-45deg);
          }
        }
      `}
  }
`
