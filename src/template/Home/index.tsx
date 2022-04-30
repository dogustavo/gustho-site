import { LayoutDefault } from 'layout'

import { Banner, FeaturedProducts, SectionBanner } from './components'
import { Offer } from 'components'

const bannerData = [
  {
    id: 'a16ce57e-b76a-11ec-b909-0242ac120002',
    image: [
      '/static/img/banner/promotional.png',
      '/static/img/banner/promotional-mob.png'
    ],
    desc: 'imagem 1'
  },
  {
    id: 'bad395b2-b76a-11ec-b909-0242ac120002',
    image: [
      '/static/img/banner/promotional.png',
      '/static/img/banner/promotional-mob.png'
    ],
    desc: 'imagem 2'
  },
  {
    id: 'c88ae2f0-b76a-11ec-b909-0242ac120002',
    image: [
      '/static/img/banner/promotional.png',
      '/static/img/banner/promotional-mob.png'
    ],
    desc: 'imagem 3'
  }
]

export default function Home() {
  return (
    <LayoutDefault session={'Início'}>
      <Banner data={bannerData} />
      <FeaturedProducts />
      <SectionBanner />
      <Offer />
    </LayoutDefault>
  )
}
