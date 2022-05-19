import styled, { css } from 'styled-components'
import { breakpoints } from 'styles'

interface IModal {
  isOpen: boolean
}

export const Modal = styled.div<IModal>`
  position: fixed;
  width: 100vw;
  height: 0;
  top: 0;
  z-index: 3;
  overflow: hidden;
`
export const Overlay = styled.div<IModal>`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  z-index: 1;
  transition: opacity 0.5s ease;
  visibility: hidden;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      z-index: 2;
      visibility: visible;

      background-color: rgba(0, 0, 0, 0.75);
      border-radius: 0.25rem;
    `}
`
export const Close = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;

  top: 1rem;
  right: 1.2rem;

  span {
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 3px;
    position: absolute;

    &:first-child {
      top: 10px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:last-child {
      top: 10px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`

export const Wrapper = styled.div<IModal>`
  padding: 3rem 1.2rem;
  padding-bottom: 1.2rem;
  z-index: 3;
  position: fixed;
  max-height: 80%;
  min-width: 25%;
  border-radius: 8px;
  top: -120vh;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #fff;
  transition: top 0.3s ease;
  visibility: hidden;

  @media (max-width: ${breakpoints.small}) {
    width: 90%;
  }

  h2 {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 2.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subText};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 50%;
      visibility: visible;
    `}
`
