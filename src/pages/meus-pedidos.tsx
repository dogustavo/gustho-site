import { MyProducts } from 'template'
import { GetServerSideProps } from 'next'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import { getAllOrders } from 'service'
import { parseCookies } from 'nookies'

import { useAuth } from 'models'
import api from 'service'

const breadcrumbs = [
  {
    route: 'Início',
    url: '/'
  },
  {
    route: 'Produtos',
    url: '/produtos'
  },
  {
    route: 'Meus Pedidos',
    url: '/meus-pedidos'
  }
]

export default function Products() {
  const { isAuth } = useAuth()
  const { data: orders } = useQuery('getAllUserOrders', getAllOrders, {
    enabled: isAuth
  })

  return <MyProducts breadcrumbs={breadcrumbs} products={orders?.data || []} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userToken } = parseCookies(context)

  const queryClient = new QueryClient()

  if (userToken) {
    api.defaults.headers.common.authorization = `Bearer ${userToken}`

    await queryClient.prefetchQuery('getAllUserOrders', getAllOrders)

    return {
      props: {
        dehydratedState: dehydrate(queryClient)
      }
    }
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false
    }
  }
}
