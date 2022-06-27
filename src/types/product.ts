export interface IProduct {
  id: number
  name: string
  shortDescription: string
  avaliable: number
  imgUrl: string
  quantity: number
}

export interface IProductDetalied {
  id: string
  name: string
  slug: string
  price: number
  quantity: number
  images: string[]
  short_description: string
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

export interface IFilter {
  page: number
  limit: number
  search: string
}
