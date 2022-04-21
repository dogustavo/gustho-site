import { createStore } from 'effector'
import { setCookie, destroyCookie } from 'nookies'

import { AuthState } from './types'
import * as actions from './actions'

const initialStore = { isAuth: false, token: '' }

export const $auth = createStore<AuthState>(initialStore, {
  name: 'authStore'
})

const signIn = (state: AuthState) => {
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

const signOut = () => {
  destroyCookie(null, 'userToken')

  return initialStore
}

$auth
  .on(actions.autorize, (_, data: AuthState) => signIn(data))
  .on(actions.unautorize, () => signOut())
