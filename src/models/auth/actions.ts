import { createEvent } from 'effector'
import { AuthState } from './types'

export const userIsLogged = createEvent<AuthState>()
