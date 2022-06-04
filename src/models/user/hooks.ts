import { useStore } from 'effector-react'

import { $user } from './store'
import * as actions from './actions'

export function useUser() {
  const { address, addressRegistred, userInfo } = useStore($user)

  return {
    address,
    addressRegistred,
    userInfo,
    ...actions
  }
}
