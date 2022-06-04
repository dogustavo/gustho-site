import * as S from './styles'

interface ILoading {
  box?: number
  size?: number
  border?: number
}

export default function Loading({ box, size, border }: ILoading) {
  return (
    <S.Loading box={box} size={size} border={border}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Loading>
  )
}
