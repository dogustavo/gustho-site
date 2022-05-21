import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  title?: string
}

export default function Button({ children, title, ...rest }: IButton) {
  return (
    <S.Button {...rest} title={title}>
      {children}
    </S.Button>
  )
}
