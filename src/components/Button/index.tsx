import React from 'react'
import * as S from './styles'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  types?: string
}

export default function Button({ children, types }: IButton) {
  return <S.Button types={types}>{children}</S.Button>
}
