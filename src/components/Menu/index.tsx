import * as S from './styles'

interface IMenu {
  isOpen: boolean
  action: () => void
}

export default function Menu({ isOpen, action }: IMenu) {
  return (
    <S.Menu isOpen={isOpen} onClick={action}>
      <span />
      <span />
      <span />
    </S.Menu>
  )
}
