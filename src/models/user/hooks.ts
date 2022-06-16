import { useStore } from 'effector-react'

import { $user } from './store'
import * as actions from './actions'

export function useUser() {
  const { address, userInfo } = useStore($user)

  return {
    address,
    userInfo,
    ...actions
  }
}
