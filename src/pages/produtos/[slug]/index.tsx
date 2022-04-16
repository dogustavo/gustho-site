import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Produto } from 'template'

import { IBreadcrumbs, IProductDetalied } from 'types'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  product: IProductDetalied
}

export default function Product({ breadcrumbs, product }: IProps) {
  return <Produto breadcrumbs={breadcrumbs} product={product} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as IParams

  const breadcrumbs = [
    {
      route: 'Início',
      url: '/'
    },
    {
      route: 'Produtos',
      url: '/produtos'
    }
  ]

  const mock = {
    name: 'Nintendo Switch 32GB',
    price: 2288.99,
    quantity: 36,
    images: [
      'https://http2.mlstatic.com/D_NQ_NP_2X_847299-MLA40692342173_022020-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_715778-MLA40692089524_022020-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_785368-MLA40692089525_022020-F.webp'
    ],
    short_description: `
      <li>Inclui 2 controles.</li>
      <li>Resolução de 1920px x 1080px.</li>
      <li>Memória RAM de 4GB.</li>
      <li>Tem tela tátil.</li>
      <li>Horas de diversão garantidas.</li>
      <li>
        Conta com: 1 joy-con grip, 2 correias para joy-con, 1 dock, 1 cabo
        hdmi, 1 adaptador de corrente.
      </li>
    `,
    description: `
      <p>
        Com seu console Switch você terá entretenimento garantido todos os dias.
        Sua tecnologia foi criada para colocar novos desafios para jogadores
        novatos e especialistas.
      </p>
      <p>
        Switch tornou-se um dos consoles mais versáteis do mercado graças ao seu
        uso portátil e desktop. A Nintendo desenvolveu este modelo com o
        objetivo de ter todos os confortos da tecnologia de elite em um
        dispositivo portátil com o qual você pode jogar e desfrutar de diversos
        conteúdos online.
      </p>
      <p>
        O Nintendo Switch é um console desmontável, que pode ser usado em modo
        portátil, desktop ou TV; isso lhe dará a possibilidade de usá-lo onde
        quiser e compartilhar seus controles.
      </p>
      <p>
        Os Joy-con tem botões especiais para fazer print da tela. Além disso,
        possui uma câmera infravermelha que pode ler a distância dos objetos e
        até mesmo detectar formas.
      </p>
      <p>
        Adaptado às suas necessidades Salve as suas aplicações, fotos, vídeos e
        muito mais no disco rígido, que tem uma capacidade de 32 GB.
      </p>
       <p>
        Por outro lado, tem uma porta USB e saída HDMI, que permitem conectar
        acessórios e carregar a bateria do controle enquanto você joga.
      </p>
      <p>
        Você poderá reproduzir música, assistir seus filmes e séries favoritos
        através dos aplicativos para download.
      </p>
    `
  }

  breadcrumbs.push({ route: slug, url: `/${slug}` })

  return {
    props: {
      breadcrumbs: breadcrumbs,
      product: mock
    }
  }
}
