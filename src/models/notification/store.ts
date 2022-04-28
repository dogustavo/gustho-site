import { createStore } from 'effector'

import { INotification } from './types'

import * as action from './actions'

// 'success' | 'danger' | 'info' | 'warning'

const initialStore = {
  show: false,
  type: '',
  message: ''
}

export const $notification = createStore<INotification>(initialStore, {
  name: 'notificationStore'
})

export const clearAllCartItems = () => {
  return initialStore
}
$notification.on(
  action.sendNotification.doneData,
  (_, notification: INotification) => notification
)

$notification.reset(action.resetNotification)
