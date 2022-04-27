import { createStore } from 'effector'

import { INotification } from './types'

import * as action from './actions'

// 'success' | 'danger' | 'info' | 'warning'

const initialStore = {
  show: false,
  type: 'success',
  message: ''
}

export const $notification = createStore<INotification>(initialStore, {
  name: 'notificationStore'
})

$notification.on(
  action.sendNotification.doneData,
  (_, notification: INotification) => notification
)
