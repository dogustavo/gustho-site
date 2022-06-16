import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

import api, { fetchClientInfo } from 'service'
import { useAuth, useUser } from 'models'
import { parseCookies } from 'nookies'

type IProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
  const { token, autorize } = useAuth()
  const { userRegister, userAddress } = useUser()

  const { data: user, isSuccess } = useQuery(
    'fetchClientInfo',
    fetchClientInfo,
    {
      enabled: !!api.defaults.headers.common.authorization
    }
  )

  useEffect(() => {
    const { userToken } = parseCookies()

    autorize({
      isAuth: !!userToken,
      token: userToken
    })

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      if (isSuccess) {
        userRegister({
          mail: user?.mail,
          name: user?.name,
          id: user?.userId.toString()
        })

        userAddress(user.address)
      }
    }
  }, [isSuccess, token])

  return <>{children}</>
}
