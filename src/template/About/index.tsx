import { Container, Title, Offer } from 'components'
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
          <S.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              tellus vel felis pretium malesuada. Sed varius erat imperdiet
              lectus scelerisque, faucibus pharetra neque viverra. Nam semper
              bibendum purus sed accumsan. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Etiam
              dolor mi, sollicitudin vitae enim at, consequat vehicula mauris.
              Sed lacinia purus a purus eleifend, vel varius odio fermentum.
              Proin mi ligula, ultrices nec lacinia pretium, tincidunt eget
              massa. Maecenas vestibulum mollis condimentum. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In rhoncus enim ac pulvinar egestas. Sed dignissim eu
              nunc ut feugiat. Ut aliquet ligula nunc, eget volutpat lorem
              tristique non. Phasellus convallis, lorem id tincidunt sagittis,
              massa metus convallis sem, non molestie tortor nunc aliquam justo.
              Ut nec egestas ipsum. Etiam et felis sed mi luctus dictum. In sit
              amet magna at nisl bibendum iaculis. Phasellus arcu neque,
              pulvinar id ultrices ut, eleifend ut lacus. Vivamus tincidunt
              facilisis pulvinar. Aliquam turpis nisi, laoreet a porta eget,
              semper et tellus. Duis ornare felis ac justo bibendum, at luctus
              sem gravida. Quisque in mi imperdiet metus ultrices pretium vitae
              in nulla. Curabitur magna nisi, lobortis eget velit quis, viverra
              sodales dolor. Vivamus elit eros, lacinia et nisl quis, posuere
              imperdiet ante. Sed aliquet eu arcu et mattis. Etiam iaculis in
              nulla vel tincidunt. Fusce vitae lorem arcu. Duis vulputate ornare
              diam, ut interdum est ultrices vitae. Praesent posuere non augue
              vitae luctus. Proin ullamcorper, dui eget cursus fringilla, dui
              odio blandit turpis, eget condimentum elit nisi et nisi. Duis ut
              sapien tempor, tincidunt purus ut, consequat massa. Proin feugiat
              vel dolor et euismod. Phasellus rutrum a ipsum in tempus. Nunc
              quam tellus, hendrerit a sodales ac, congue a sem. Donec viverra
              vehicula elit, vel facilisis est blandit non. Curabitur non tellus
              lectus. Sed id sem a dolor faucibus volutpat et eu erat. Sed
              egestas at est eu mollis. Duis eget orci molestie, lacinia mauris
              in, pharetra nisl. Nunc a tincidunt nunc. Suspendisse accumsan
              eget quam sodales varius. Maecenas tempor hendrerit aliquam.
            </p>

            <p>
              Maecenas vestibulum mollis condimentum. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In rhoncus enim ac pulvinar egestas. Sed dignissim eu
              nunc ut feugiat. Ut aliquet ligula nunc, eget volutpat lorem
              tristique non. Phasellus convallis, lorem id tincidunt sagittis,
              massa metus convallis sem, non molestie tortor nunc aliquam justo.
              Ut nec egestas ipsum. Etiam et felis sed mi luctus dictum. In sit
              amet magna at nisl bibendum iaculis. Phasellus arcu neque,
              pulvinar id ultrices ut, eleifend ut lacus. Vivamus tincidunt
              facilisis pulvinar.
            </p>

            <p>
              Aliquam turpis nisi, laoreet a porta eget, semper et tellus. Duis
              ornare felis ac justo bibendum, at luctus sem gravida. Quisque in
              mi imperdiet metus ultrices pretium vitae in nulla. Curabitur
              magna nisi, lobortis eget velit quis, viverra sodales dolor.
              Vivamus elit eros, lacinia et nisl quis, posuere imperdiet ante.
              Sed aliquet eu arcu et mattis. Etiam iaculis in nulla vel
              tincidunt.
            </p>

            <p>
              Fusce vitae lorem arcu. Duis vulputate ornare diam, ut interdum
              est ultrices vitae. Praesent posuere non augue vitae luctus. Proin
              ullamcorper, dui eget cursus fringilla, dui odio blandit turpis,
              eget condimentum elit nisi et nisi. Duis ut sapien tempor,
              tincidunt purus ut, consequat massa. Proin feugiat vel dolor et
              euismod. Phasellus rutrum a ipsum in tempus. Nunc quam tellus,
              hendrerit a sodales ac, congue a sem. Donec viverra vehicula elit,
              vel facilisis est blandit non.
            </p>

            <p>
              Curabitur non tellus lectus. Sed id sem a dolor faucibus volutpat
              et eu erat. Sed egestas at est eu mollis. Duis eget orci molestie,
              lacinia mauris in, pharetra nisl. Nunc a tincidunt nunc.
              Suspendisse accumsan eget quam sodales varius. Maecenas tempor
              hendrerit aliquam.
            </p>
          </S.Text>

          <S.Business>
            <img
              src="/static/img/business/first.png"
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

          <S.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              tellus vel felis pretium malesuada. Sed varius erat imperdiet
              lectus scelerisque, faucibus pharetra neque viverra. Nam semper
              bibendum purus sed accumsan. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Etiam
              dolor mi, sollicitudin vitae enim at, consequat vehicula mauris.
              Sed lacinia purus a purus eleifend, vel varius odio fermentum.
              Proin mi ligula, ultrices nec lacinia pretium, tincidunt eget
              massa. Maecenas vestibulum mollis condimentum. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In rhoncus enim ac pulvinar egestas. Sed dignissim eu
              nunc ut feugiat. Ut aliquet ligula nunc, eget volutpat lorem
              tristique non. Phasellus convallis, lorem id tincidunt sagittis,
              massa metus convallis sem, non molestie tortor nunc aliquam justo.
              Ut nec egestas ipsum. Etiam et felis sed mi luctus dictum. In sit
              amet magna at nisl bibendum iaculis. Phasellus arcu neque,
              pulvinar id ultrices ut, eleifend ut lacus. Vivamus tincidunt
              facilisis pulvinar.
            </p>

            <p>
              Aliquam turpis nisi, laoreet a porta eget, semper et tellus. Duis
              ornare felis ac justo bibendum, at luctus sem gravida. Quisque in
              mi imperdiet metus ultrices pretium vitae in nulla. Curabitur
              magna nisi, lobortis eget velit quis, viverra sodales dolor.
              Vivamus elit eros, lacinia et nisl quis, posuere imperdiet ante.
              Sed aliquet eu arcu et mattis. Etiam iaculis in nulla vel
              tincidunt.
            </p>

            <p>
              Fusce vitae lorem arcu. Duis vulputate ornare diam, ut interdum
              est ultrices vitae. Praesent posuere non augue vitae luctus. Proin
              ullamcorper, dui eget cursus fringilla, dui odio blandit turpis,
              eget condimentum elit nisi et nisi. Duis ut sapien tempor,
              tincidunt purus ut, consequat massa. Proin feugiat vel dolor et
              euismod. Phasellus rutrum a ipsum in tempus. Nunc quam tellus,
              hendrerit a sodales ac, congue a sem. Donec viverra vehicula elit,
              vel facilisis est blandit non.
            </p>

            <p>
              Curabitur non tellus lectus. Sed id sem a dolor faucibus volutpat
              et eu erat. Sed egestas at est eu mollis. Duis eget orci molestie,
              lacinia mauris in, pharetra nisl. Nunc a tincidunt nunc.
              Suspendisse accumsan eget quam sodales varius. Maecenas tempor
              hendrerit aliquam.
            </p>
          </S.Text>

          <S.Business>
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

            <img
              src="/static/img/business/second.png"
              alt="Mulher olhando para o celular"
            />
          </S.Business>

          <S.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              tellus vel felis pretium malesuada. Sed varius erat imperdiet
              lectus scelerisque, faucibus pharetra neque viverra. Nam semper
              bibendum purus sed accumsan. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Etiam
              dolor mi, sollicitudin vitae enim at, consequat vehicula mauris.
              Sed lacinia purus a purus eleifend, vel varius odio fermentum.
              Proin mi ligula, ultrices nec lacinia pretium, tincidunt eget
              massa. Maecenas vestibulum mollis condimentum. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In rhoncus enim ac pulvinar egestas. Sed dignissim eu
              nunc ut feugiat. Ut aliquet ligula nunc, eget volutpat lorem
              tristique non. Phasellus convallis, lorem id tincidunt sagittis,
              massa metus convallis sem, non molestie tortor nunc aliquam justo.
              Ut nec egestas ipsum. Etiam et felis sed mi luctus dictum. In sit
              amet magna at nisl bibendum iaculis. Phasellus arcu neque,
              pulvinar id ultrices ut, eleifend ut lacus. Vivamus tincidunt
              facilisis pulvinar.
            </p>

            <p>
              Aliquam turpis nisi, laoreet a porta eget, semper et tellus. Duis
              ornare felis ac justo bibendum, at luctus sem gravida. Quisque in
              mi imperdiet metus ultrices pretium vitae in nulla. Curabitur
              magna nisi, lobortis eget velit quis, viverra sodales dolor.
              Vivamus elit eros, lacinia et nisl quis, posuere imperdiet ante.
              Sed aliquet eu arcu et mattis. Etiam iaculis in nulla vel
              tincidunt.
            </p>

            <p>
              Fusce vitae lorem arcu. Duis vulputate ornare diam, ut interdum
              est ultrices vitae. Praesent posuere non augue vitae luctus. Proin
              ullamcorper, dui eget cursus fringilla, dui odio blandit turpis,
              eget condimentum elit nisi et nisi. Duis ut sapien tempor,
              tincidunt purus ut, consequat massa. Proin feugiat vel dolor et
              euismod. Phasellus rutrum a ipsum in tempus. Nunc quam tellus,
              hendrerit a sodales ac, congue a sem. Donec viverra vehicula elit,
              vel facilisis est blandit non.
            </p>

            <p>
              Curabitur non tellus lectus. Sed id sem a dolor faucibus volutpat
              et eu erat. Sed egestas at est eu mollis. Duis eget orci molestie,
              lacinia mauris in, pharetra nisl. Nunc a tincidunt nunc.
              Suspendisse accumsan eget quam sodales varius. Maecenas tempor
              hendrerit aliquam.
            </p>
          </S.Text>

          <Offer />
        </Container>
      </S.Article>
    </LayoutDefault>
  )
}
