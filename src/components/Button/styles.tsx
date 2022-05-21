import styled from 'styled-components'

type nestedTypeOptions = {
  [key: string]: string
}

type buttonTypeOptions = {
  [key: string]: nestedTypeOptions
}

interface IButton {
  title?: string | undefined
}

const buttonType = (title = 'primary') => {
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
    },
    submit: {
      background: '#19D16F',
      color: '#FFF',
      hover: '#151875',
      hoverColor: '#FFF'
    }
  }

  return choose[title]
}

export const Button = styled.button<IButton>`
  width: 100%;
  color: ${({ title }) => buttonType(title).color};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 1.3rem 1rem;
  background-color: ${({ title }) => buttonType(title).background};
  transition: background 0.5s ease;
  border-radius: 5px;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ title }) => buttonType(title).hover};
      color: ${({ title }) => buttonType(title).hoverColor};
    }
  }
`
