import { IAddress, IClient } from './types'

export const setUserAddress = (state: IAddress) => {
  console.log(state)
  // return { ...state }
}

export const setUserRegister = (state: IClient) => {
  console.log(state)
}
