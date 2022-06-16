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

  const { data: user, isSuccess } = useQuery(
    'fetchClientInfo',
    fetchClientInfo,
    {
      enabled: !!shouldFetch
    }
  )

  useEffect(() => {
    if (userToken) {
      api.defaults.headers.common.authorization = `Bearer ${userToken}`

      autorize({
        isAuth: !!userToken,
        token: userToken
      })

      if (isSuccess) {
        userRegister({
          mail: user?.mail,
          name: user?.name,
          id: user?.userId.toString()
        })

        setUserAddress(user.address)
      }
    }
  }, [isSuccess, userToken])

  return <>{children}</>
}
