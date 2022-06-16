import { createStore } from 'effector'

import { IAddress, IUser, IClient } from './types'

import * as service from './service'
import * as action from './actions'

const initialStore = {
  addressRegistred: false,
  address: [
    {
      number: '',
      streetname: '',
      streetname2: '',
      city: '',
      state: '',
      zipcode: ''
    }
  ],
  userInfo: {
    mail: '',
    name: '',
    id: ''
  }
}

export const $user = createStore<IUser>(initialStore, {
  name: 'userStore'
})

$user
  .on(action.userAddress, (state, address: IAddress[]) =>
    service.setUserAddress({ ...state, address: [...address] })
  )
  .on(action.userRegister, (state, user: IClient) =>
    service.setUserInfo({ ...state, userInfo: { ...user } })
  )
