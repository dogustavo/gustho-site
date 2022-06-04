import { createEvent } from 'effector'
import { IAddress, IClient } from './types'

export const userAddress = createEvent<IAddress>()
export const userRegister = createEvent<IClient>()
