import Image from 'next/image'
import Link from 'next/link'
import { useWindowSize } from 'hooks'

import * as S from './styles'

export default function SectionBanner() {
  const image =
    useWindowSize() < 450
      ? '/static/img/section-mobile.png'
      : '/static/img/section-desktop.png'

  return (
    <S.Section>
      <Image
        src={image}
        quality={85}
        layout="fill"
        objectFit="cover"
        alt=""
        priority
      />

      <S.Wrapper>
        <h2>
          Lorem ipsum dolor, sit amet <br />
          consectetur adipisicing elit.
        </h2>

        <Link href="/produtos">
          <a>Ver produtos</a>
        </Link>
      </S.Wrapper>
    </S.Section>
  )
}
