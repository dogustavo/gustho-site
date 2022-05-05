import { createStore } from 'effector'

import { IAddress, IUser } from './types'

import * as service from './service'
import * as action from './actions'

const initialStore = {
  addressRegistred: false,
  address: {
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    zipcode: ''
  }
}

export const $user = createStore<IUser>(initialStore, {
  name: 'userStore'
})

$user.on(action.userAddress, (state, address: IAddress) =>
  service.setUserAddress({ ...state, ...address })
)
