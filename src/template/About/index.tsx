import { Container, Title } from 'components'
import { LayoutDefault } from 'layout'

import * as S from './styles'

const breadcrumbs = [
  {
    route: 'Início',
    url: '/'
  },
  {
    route: 'Sobre',
    url: '/sobre'
  }
]
export default function About() {
  return (
    <LayoutDefault session="Sobre">
      <Title title="Sobre nós" breadcrumbs={breadcrumbs} />
      <S.Article>
        <Container>
          <S.Business>
            <img
              src="/static/img/business.png"
              alt="Homens conversando sobre algo que um deles tem no celular"
            />

            <S.About>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                alias vel.
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </S.About>
          </S.Business>
        </Container>
      </S.Article>
    </LayoutDefault>
  )
}
