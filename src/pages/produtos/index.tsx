import { Produtos } from 'template'

const products = [
  {
    id: '1f550102-b805-11ec-b909-0242ac120002',
    name: 'Cantilever chair',
    slug: 'cantilever-chair0',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 42.01,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f550422-b805-11ec-b909-0242ac120002',
    name: 'Cantilever chair',
    slug: 'cantilever-chair1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 45.21,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f5505f8-b805-11ec-b909-0242ac120002',
    name: 'Cantilever chair',
    slug: 'cantilever-chair2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 21.0,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f55079c-b805-11ec-b909-0242ac120002',
    name: 'Cantilever chair',
    slug: 'cantilever-chair33',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 99.99,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f550102-b805-11ec-b909-0242ac120012',
    name: 'Cantilever chair',
    slug: 'cantilever-chair4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 50.01,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f550422-b805-11ec-b909-0242ac120013',
    name: 'Cantilever chair',
    slug: 'cantilever-chair5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 18.21,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f5505f8-b805-11ec-b909-0242ac120014',
    name: 'Cantilever chair',
    slug: 'cantilever-chair6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 21.99,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  },
  {
    id: '1f55079c-b805-11ec-b909-0242ac120015',
    name: 'Cantilever chair',
    slug: 'cantilever-chair7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 99.99,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/fb2e87.png'
  }
]

export default function Products() {
  return <Produtos products={products} />
}
