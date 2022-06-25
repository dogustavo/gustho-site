import { Produtos } from 'template'
import { GetServerSideProps } from 'next'
// import { useQuery } from 'react-query'
import { getProducts } from 'service'
import { IPrductsPaginate } from 'types'
import { useState } from 'react'

import { dehydrate, QueryClient, useQuery } from 'react-query'

interface IProducts {
  product: IPrductsPaginate
}

export default function Products() {
  const [filter, setFilter] = useState({
    page: 1,
    limit: 15,
    search: ''
  })

  const { data: products, isLoading } = useQuery(
    ['getAllProducts', filter],
    () => getProducts(filter)
  )

  return (
    <Produtos
      products={products?.data}
      setFilter={setFilter}
      filter={filter}
      isLoading={isLoading}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const filter = {
    page: 1,
    limit: 15,
    search: ''
  }

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['getAllProducts', filter], () =>
    getProducts(filter)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
