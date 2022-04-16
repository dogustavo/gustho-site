import React from 'react'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { IBreadcrumbs } from 'types'
import { data } from 'template/Institucional/data'

import { Institucional } from 'template'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  institutional: {
    name: string
    content: string
  }
}

export default function Page({ breadcrumbs, institutional }: IProps) {
  return (
    <Institucional breadcrumbs={breadcrumbs} institutional={institutional} />
  )
}

export async function getStaticPaths() {
  const paths = data.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams

  const breadcrumbs = [
    {
      route: 'Início',
      url: '/'
    }
  ]

  const institutional = data.find((item) => item.slug === slug)

  if (institutional) {
    breadcrumbs.push({
      route: institutional.name,
      url: `/${institutional.slug}`
    })
  }

  return {
    props: {
      institutional: {
        name: institutional?.name,
        content: institutional?.content
      },
      breadcrumbs
    }
  }
}
