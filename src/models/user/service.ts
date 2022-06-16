import { IUser } from './types'

export const setUserAddress = (state: IUser) => {
  return { ...state, address: state.address }
}

export const setUserInfo = (user: IUser) => {
  return { ...user, address: [] }
}
