import { useForm, FormProvider } from 'react-hook-form'
import { Container, Product, Input } from 'components'
import { IProduct } from 'types'

import * as S from './styles'

interface IProducts {
  products: IProduct[]
}

export default function List({ products }: IProducts) {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })
  const renderProductsList = () => {
    return products.map((product) => <Product {...product} key={product.id} />)
  }

  return (
    <article>
      <Container>
        <FormProvider {...methods}>
          <Input name="search" required={true} label="Buscar" type="text" />

          <button onClick={onSubmit}>Teste</button>
        </FormProvider>
        <S.Wrapper>{renderProductsList()}</S.Wrapper>
      </Container>
    </article>
  )
}
