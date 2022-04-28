import { useEffect } from 'react'
import * as S from './styles'

interface IModal {
  children: React.ReactNode
  isOpen: boolean
  closeModal?: () => void
}

export default function Modal({ children, isOpen, closeModal }: IModal) {
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
    <S.Modal isOpen={isOpen}>
      <S.Overlay isOpen={isOpen} onClick={closeModal} />

      <S.Wrapper isOpen={isOpen}>
        <S.Close onClick={closeModal}>
          <span />
          <span />
        </S.Close>
        {children}
      </S.Wrapper>
    </S.Modal>
  )
}
