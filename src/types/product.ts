export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image_url: string
}

export interface IProductDetalied {
  name: string
  price: number
  quantity: number
  image: string[]
  short_description: string
  description: string
}

export interface IBreadcrumbs {
  route: string
  url: string
}
