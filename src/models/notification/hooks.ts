import { useStore } from 'effector-react'

import { $notification } from './store'
import * as actions from './actions'

export function useNotification() {
  const notification = useStore($notification)

  return {
    notification,
    ...actions
  }
}
