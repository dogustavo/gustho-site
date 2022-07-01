import styled from 'styled-components'

interface ILoading {
  box?: number
  size?: number
  border?: number
  color?: string
}

export const Loading = styled.div<ILoading>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ box }) => (box ? `${box}px` : '38px')};
  height: ${({ box }) => (box ? `${box}px` : '38px')};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => (size ? `${size}px` : '38px')};
    height: ${({ size }) => (size ? `${size}px` : '38px')};
    border: ${({ border }) => (border ? `${border}px` : '4px')} solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => (color ? color : '#FFF')} transparent
      transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
