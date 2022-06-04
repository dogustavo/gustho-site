import { setCookie, destroyCookie } from 'nookies'
import Router from 'next/router'
import { AuthState } from './types'

export const signIn = (state: AuthState) => {
  setCookie(null, 'userToken', state.token, {
    maxAge: 60 * 60 * 24 * 31, //1 mes
    path: '/'
  })

  return {
    ...state,
    isAuth: state.isAuth,
    token: state.token
  }
}

export const signOut = () => {
  destroyCookie(null, 'userToken')

  Router.reload()

  return { isAuth: false, token: '' }
}
