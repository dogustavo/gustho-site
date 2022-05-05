export interface IUser {
  address: IAddress
  addressRegistred: boolean
}

export interface IAddress {
  street: string
  number: string
  district: string
  city: string
  state: string
  zipcode: string
}
