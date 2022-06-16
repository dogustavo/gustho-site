import { IUser } from './types'

export const setUserAddress = (state: IUser) => {
  return { ...state, address: state.address, addressRegistred: true }
}

export const setUserInfo = (user: IUser) => {
  return user
}
