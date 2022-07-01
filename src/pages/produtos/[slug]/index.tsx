import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Produto } from 'template'

import { IBreadcrumbs } from 'types'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import { getProductDetalied } from 'service'
interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  slug: string
}

export default function Product({ breadcrumbs, slug }: IProps) {
  const { data: product } = useQuery(['getProductDetalied', slug], () =>
    getProductDetalied(slug)
  )

  return <Produto breadcrumbs={breadcrumbs} product={product} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as IParams

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['getProductDetalied', slug], () =>
    getProductDetalied(slug)
  )

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

  breadcrumbs.push({ route: slug, url: `/produtos/${slug}` })

  return {
    props: {
      breadcrumbs,
      slug,
      dehydratedState: dehydrate(queryClient)
    }
  }
}
