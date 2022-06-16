import { setCookie, destroyCookie } from 'nookies'
import Router from 'next/router'
import { AuthState } from './types'

export const signIn = (state: AuthState) => {
  setCookie(null, 'userToken', state.token, {
    maxAge: 60 * 60 * 5, //5 horas
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

  Router.push('/')

  return { isAuth: false, token: '' }
}
