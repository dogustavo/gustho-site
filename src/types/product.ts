export interface IProduct {
  id: number
  name: string
  price: number
  shortDescription: string
  avaliable: number
  imgUrl: string
  quantity: number
}

export interface IProductDetalied {
  id: string
  metric: string
  name: string
  price: number
  quantity: number
  media: IMedia[]
  avaliable: number
  shortDescription: string
  description: string
}

export interface IBreadcrumbs {
  route: string
  url: string
}

export interface IPrductsPaginate {
  data: IProduct[]
  limit: number
  page: number
  pages: number
  total: number
}

export interface IOrder {
  clientAddressId: number
  clientsId: number
  createdAt: Date
  id: number
  products: IOrderProduct[]
  status: string
  total: number
  updatedAt: Date
}
export interface IFilter {
  page: number
  limit: number
  search: string
}

interface IMedia {
  createdAt: string
  extension: string
  filename: string
  id: number
  order: string
  path: string
  productId: number
  updatedAt: string
}

interface IOrderProduct extends IProduct {
  CheckoutItemsDTO: {
    checkoutId: number
    createdAt: Date
    productId: number
    quantity: number
    updatedAt: Date
    valueUnit: number
  }
}
