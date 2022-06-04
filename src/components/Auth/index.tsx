import { useAuth } from 'models'
import { parseCookies } from 'nookies'
import React, { useEffect } from 'react'

import api from 'service'

type IProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
  const { token, autorize } = useAuth()

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
    }
  }, [autorize])

  return <>{children}</>
}
