import { Produtos } from 'template'

const products = [
  {
    id: '1f550102-b805-11ec-b909-0242ac120002',
    name: 'Cadeira',
    slug: 'cantilever-chair0',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 42.01,
    image_url: 'https://dummyimage.com/270x240/f6f7fb/000000.png'
  },
  {
    id: '1f550422-b805-11ec-b909-0242ac120002',
    name: 'Videogame',
    slug: 'cantilever-chair1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 45.21,
    image_url: 'https://dummyimage.com/270x240/000000/ffffff.png'
  },
  {
    id: '1f5505f8-b805-11ec-b909-0242ac120002',
    name: 'PlayStation',
    slug: 'cantilever-chair2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 21.0,
    image_url: 'https://dummyimage.com/270x240/730073/ffffff.png'
  },
  {
    id: '1f55079c-b805-11ec-b909-0242ac120002',
    name: 'Computador',
    slug: 'cantilever-chair33',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 99.99,
    image_url: 'https://dummyimage.com/270x240/000a63/ffffff.png'
  },
  {
    id: '1f550102-b805-11ec-b909-0242ac120012',
    name: 'Mouse',
    slug: 'cantilever-chair4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 50.01,
    image_url: 'https://dummyimage.com/270x240/0a6100/ffffff.png'
  },
  {
    id: '1f550422-b805-11ec-b909-0242ac120013',
    name: 'Teclado',
    slug: 'cantilever-chair5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 18.21,
    image_url: 'https://dummyimage.com/270x240/ab9a00/ffffff.png'
  },
  {
    id: '1f5505f8-b805-11ec-b909-0242ac120014',
    name: 'Violão 12 cordas',
    slug: 'cantilever-chair6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 21.99,
    image_url: 'https://dummyimage.com/270x240/960000/ffffff.png'
  },
  {
    id: '1f55079c-b805-11ec-b909-0242ac120015',
    name: 'Tênis',
    slug: 'cantilever-chair7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 99.99,
    image_url: 'https://dummyimage.com/270x240/8e009e/ffffff.png'
  }
]

export default function Products() {
  return <Produtos products={products} />
}
