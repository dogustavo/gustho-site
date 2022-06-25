import * as S from './styles'

interface ILoading {
  box?: number
  size?: number
  border?: number
  color?: string
}

export default function Loading({ box, size, border, color }: ILoading) {
  return (
    <S.Loading box={box} size={size} border={border} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Loading>
  )
}
