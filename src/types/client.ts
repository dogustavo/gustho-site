export interface IClient {
  birthdate: Date
  cpf: string
  mail: string
  name: string
  password: string
  phone: string
}

export interface IClientFull {
  birthdate: Date
  cpf: string
  mail: string
  name: string
  password: string
  phone: string
  address: IAddress[]
  userId: number
}

export interface IAddress {
  zipcode: string
  streetname: string
  streetname2: string
  number: string
  city: string
  state: string
  id: string | null
}
