import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

import { Loading } from 'components'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  title?: string
  isLoading?: boolean
  isDisabled?: boolean
}

export default function Button({
  children,
  title,
  isLoading,
  isDisabled,
  ...rest
}: IButton) {
  return (
    <S.Button {...rest} title={title} disabled={isDisabled}>
      {!isLoading ? children : <Loading box={24} size={18} border={2} />}
    </S.Button>
  )
}
