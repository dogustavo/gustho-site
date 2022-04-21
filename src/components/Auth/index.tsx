import { useAuth } from 'models'
import { parseCookies } from 'nookies'
import React, { useEffect, useLayoutEffect } from 'react'

import api from 'service'

type IProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
  const { token, autorize } = useAuth()

  useLayoutEffect(() => {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }, [token])

  useEffect(() => {
    const { userToken } = parseCookies()

    console.log('userToken', userToken)

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
