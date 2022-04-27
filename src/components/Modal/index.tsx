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
      document.body.setAttribute(
        'style',
        `position: fixed; top: -${window.scrollY}px; left: 0; right: 0`
      )
    } else {
      const scrollY = document.body.style.top
      document.body.setAttribute('style', '')
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
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
