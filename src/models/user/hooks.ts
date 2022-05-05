import { useStore } from 'effector-react'

import { $user } from './store'
import * as actions from './actions'

export function useUser() {
  const user = useStore($user)

  return {
    user,
    ...actions
  }
}
