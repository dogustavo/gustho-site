import { createEffect, createEvent } from 'effector'
import { INotification } from './types'

export const sendNotification = createEffect(
  async (notification: INotification) => notification
)

export const resetNotification = createEvent()
