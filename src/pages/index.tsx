import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useQuery } from 'react-query'

import { Home } from 'template'
import { getProducts } from 'service'
import { IPrductsPaginate } from 'types'

interface IProducts {
  product: IPrductsPaginate
}

export default function App({ product }: IProducts) {
  const [filter] = useState({
    page: product.page | 1,
    limit: product.limit | 8
  })

  const { data: products } = useQuery(
    ['getAllProducts', filter],
    () => getProducts(filter),
    { initialData: product }
  )

  return <Home products={products?.data} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const product = await getProducts({ page: 1, limit: 8, search: undefined })

  return {
    props: {
      product
    }
  }
}
