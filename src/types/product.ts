export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image_url: string
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

export interface ICart {
  id: string
  name: string
  slug: string
  price: number
  image_url: string
}

export interface IBreadcrumbs {
  route: string
  url: string
}
