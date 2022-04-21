import { createStore } from 'effector'

import { AuthState } from './types'
import * as actions from './actions'

const initialStore = { isAuth: false, token: '' }

export const $auth = createStore<AuthState>(initialStore, {
  name: 'authStore'
})

const signIn = (state: AuthState) => {
  console.log('sim', state)
}

$auth.on(actions.userIsLogged, (_, data: AuthState) => signIn(data))
