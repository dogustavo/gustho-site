export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image_url: string
}

export interface IBreadcrumbs {
  route: string
  url: string
}
