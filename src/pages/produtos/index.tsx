import { Produtos } from 'template'
import { GetServerSideProps } from 'next'
import { getProducts } from 'service'
import { useState } from 'react'

import { dehydrate, QueryClient, useQuery } from 'react-query'

const filterProps = {
  page: 1,
  limit: 12,
  search: ''
}

export default function Products() {
  const [filter, setFilter] = useState(filterProps)

  const { data: products, isLoading } = useQuery(
    ['getAllProducts', filter],
    () => getProducts(filter)
  )

  return (
    <Produtos
      products={products}
      setFilter={setFilter}
      filter={filter}
      isLoading={isLoading}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['getAllProducts', filterProps], () =>
    getProducts(filterProps)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
