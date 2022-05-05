import { createEvent } from 'effector'
import { IAddress } from './types'

export const userAddress = createEvent<IAddress>()
