export interface IUser {
  address: IAddress[]
  userInfo: IClient
  addressRegistred: boolean
}

export interface IClient {
  name: string
  mail: string
  id: string
}

export interface IAddress {
  streetname: string
  streetname2: string
  number: string
  city: string
  state: string
  zipcode: string
}
