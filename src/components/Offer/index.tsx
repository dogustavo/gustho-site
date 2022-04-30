import { Article } from 'components'

import * as S from './styles'

const bennefists = [
  {
    icon: '/static/img/free-delivery.svg',
    title: 'Entrega Grátis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    icon: '/static/img/cashback.svg',
    title: 'Cashback',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    icon: '/static/img/premium-quality.svg',
    title: 'Atendimento Premium',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    icon: '/static/img/support.svg',
    title: 'Suporte 24 horas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  }
]

export default function FeaturedProducts() {
  const renderBennefits = () => {
    return bennefists.map((benefit, id) => (
      <S.Card key={id}>
        <img src={benefit.icon} alt={`Benefício de ${benefit.title}`} />

        <S.CardDesc>
          <S.CardTitle>{benefit.title}</S.CardTitle>
          <S.Description>{benefit.description}</S.Description>
        </S.CardDesc>
      </S.Card>
    ))
  }

  return (
    <Article>
      <h2>O que oferecemos!</h2>
      <S.Wrapper>{renderBennefits()}</S.Wrapper>
    </Article>
  )
}
