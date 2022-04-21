import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  types?: string
}

export default function Button({ children, types, ...rest }: IButton) {
  return (
    <S.Button {...rest} types={types}>
      {children}
    </S.Button>
  )
}
