import styled from 'styled-components'

type nestedTypeOptions = {
  [key: string]: string
}

type buttonTypeOptions = {
  [key: string]: nestedTypeOptions
}

interface IButton {
  types?: string | undefined
}

const buttonType = (types = 'primary') => {
  const choose: buttonTypeOptions = {
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

  return choose[types]
}

export const Button = styled.button<IButton>`
  width: 100%;
  color: ${({ types }) => buttonType(types).color};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 1.3rem 1rem;
  background-color: ${({ types }) => buttonType(types).background};
  transition: background 0.5s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ types }) => buttonType(types).hover};
      color: ${({ types }) => buttonType(types).hoverColor};
    }
  }
`
