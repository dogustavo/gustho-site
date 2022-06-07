import { IUser } from './types'

export const setUserAddress = (state: IUser) => {
  console.log(state)
  // return { ...state }
}

export const setUserInfo = (user: IUser) => {
  return user
}
