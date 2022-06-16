export interface IUser {
  address: IAddress[]
  userInfo: IClient
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
  id: string | undefined
}
