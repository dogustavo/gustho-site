import React, { useEffect } from 'react'
import { parseCookies } from 'nookies'
import { useQuery } from 'react-query'

import api, { fetchClientInfo } from 'service'
import { useAuth, useUser } from 'models'

type IProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
  const { token, autorize } = useAuth()
  const { userRegister } = useUser()

  const { data, refetch, isSuccess } = useQuery(
    'fetchClientInfo',
    fetchClientInfo,
    {
      enabled: false
    }
  )

  useEffect(() => {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }, [token])

  useEffect(() => {
    const { userToken } = parseCookies()

    if (userToken) {
      api.defaults.headers.common.authorization = `Bearer ${userToken}`

      autorize({
        isAuth: !!userToken,
        token: userToken
      })

      //request para busca do user
      refetch()

      if (isSuccess) {
        userRegister({
          mail: data?.mail,
          name: data?.name
        })
      }
    }
  }, [autorize, isSuccess])

  return <>{children}</>
}
