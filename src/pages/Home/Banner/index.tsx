import Image from 'next/image'
import Slider from 'react-slick'

import * as S from './styles'

interface IBannerDate {
  data: Banner[]
}

interface Banner {
  id: string
  image: string
  desc: string
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div />
}

export default function Banner({ data }: IBannerDate) {
  return (
    <article>
      <S.List>
        <Slider {...settings}>
          {data.map(({ id, image, desc }) => (
            <div key={id}>
              <S.WrapImage>
                <Image
                  src={image}
                  quality={85}
                  layout="fill"
                  objectFit="cover"
                  alt={desc}
                />
              </S.WrapImage>
            </div>
          ))}
        </Slider>
      </S.List>
    </article>
  )
}
