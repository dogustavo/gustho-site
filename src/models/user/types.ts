export interface IUser {
  address: IAddress
  user: IClient
  addressRegistred: boolean
}

export interface IClient {
  name: string
  mail: string
}

export interface IAddress {
  street: string
  number: string
  district: string
  city: string
  state: string
  zipcode: string
}
