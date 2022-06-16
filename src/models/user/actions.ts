import { createEvent } from 'effector'
import { IAddress, IClient } from './types'

export const setUserAddress = createEvent<IAddress[]>()
export const userRegister = createEvent<IClient>()
