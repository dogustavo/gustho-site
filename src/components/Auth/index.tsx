import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

import api, { fetchClientInfo } from 'service'
import { useAuth, useUser } from 'models'
import { parseCookies } from 'nookies'

type IProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
  const { autorize } = useAuth()
  const { userToken } = parseCookies()

  const { userRegister, setUserAddress } = useUser()

  const { authorization } = api.defaults.headers.common

  const shouldFetch = authorization && (authorization as string)

  const { isSuccess } = useQuery('fetchClientInfo', fetchClientInfo, {
    enabled: !!shouldFetch,
    onSuccess: (data) => {
      userRegister({
        mail: data?.mail,
        name: data?.name,
        id: data?.userId.toString()
      })

      setUserAddress(data.address)
    }
  })

  useEffect(() => {
    if (userToken) {
      api.defaults.headers.common.authorization = `Bearer ${userToken}`

      autorize({
        isAuth: !!userToken,
        token: userToken
      })
    }
  }, [userToken, isSuccess])

  return <>{children}</>
}
