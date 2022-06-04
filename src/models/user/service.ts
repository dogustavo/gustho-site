import { IAddress, IUser } from './types'

export const setUserAddress = (state: IAddress) => {
  console.log(state)
  // return { ...state }
}

export const setUserInfo = (user: IUser) => {
  return user
}
