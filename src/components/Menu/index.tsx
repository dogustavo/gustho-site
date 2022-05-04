import { useEffect } from 'react'
import * as S from './styles'

interface IMenu {
  isOpen: boolean
  action: () => void
}

export default function Menu({ isOpen, action }: IMenu) {
  useEffect(() => {
    if (isOpen) {
      document
        .getElementById('__next')
        ?.setAttribute('style', 'overflow: hidden; height: 100vh;')
    } else {
      document.getElementById('__next')?.setAttribute('style', '')
    }
  }, [isOpen])

  return (
    <S.Menu isOpen={isOpen} onClick={action}>
      <span />
      <span />
      <span />
    </S.Menu>
  )
}
