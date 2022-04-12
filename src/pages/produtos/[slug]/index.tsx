import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Produto } from 'template'

import { IBreadcrumbs } from 'types'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps {
  breadcrumbs: IBreadcrumbs[]
}

export default function Product({ breadcrumbs }: IProps) {
  return <Produto breadcrumbs={breadcrumbs} />
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

  breadcrumbs.push({ route: slug, url: `/${slug}` })

  return {
    props: {
      breadcrumbs: breadcrumbs
    }
  }
}
