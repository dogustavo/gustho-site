import styled from 'styled-components'

type nestedTypeOptions = {
  [key: string]: string
}

type buttonTypeOptions = {
  [key: string]: nestedTypeOptions
}

interface IButton {
  types?: string
}

const buttonType = (button: string) => {
  const types: buttonTypeOptions = {
    primary: {
      background: '#FB2E86',
      color: '#FFF',
      hover: '#151875',
      hoverColor: '#FFF'
    },
    secundary: {
      background: 'transparent',
      color: '#151875',
      hover: '#FB2E86',
      hoverColor: '#FFF'
    }
  }

  return types[button] || types.primary
}

export const Button = styled.button<IButton>`
  width: 100%;
  padding: 12px 24px;
  background-color: ${({ types }) => buttonType(types).background};
  color: ${({ types }) => buttonType(types).color};
  transition: background 0.5s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ types }) => buttonType(types).hover};
      color: ${({ types }) => buttonType(types).hoverColor};
    }
  }
`
