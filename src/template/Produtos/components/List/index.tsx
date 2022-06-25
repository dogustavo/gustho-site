import { useForm, FormProvider } from 'react-hook-form'
import { Container, Product, Input, Loading, Pagination } from 'components'
import { IFilter, IProduct } from 'types'

import * as S from './styles'

interface IProps {
  data: IProduct[]
  total: number
  pages: number
  page: number
  limit: number
}

interface IProducts {
  products: IProps | undefined
  setFilter: (props: IFilter) => void
  filter: IFilter
  isLoading: boolean
}
interface ISearch {
  [search: string]: string
}

export default function List({
  products,
  setFilter,
  filter,
  isLoading
}: IProducts) {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(async ({ search }: ISearch) => {
    setFilter({ ...filter, search })
  })

  const renderProductsList = () => {
    return products?.data?.map((product) => (
      <Product {...product} key={product.id} />
    ))
  }

  console.log(products)

  const handlePagination = (type: string) => {
    window.scrollTo({
      top: 250
    })

    const pagination = {
      first: 1,
      prev: filter.page - 1,
      next: filter.page + 1
    }[type]

    setFilter({
      ...filter,
      page: pagination || 1
    })
  }

  return (
    <article>
      <Container>
        <FormProvider {...methods}>
          <S.Filter>
            <p>Buscar por:</p>

            <S.Form>
              <form onSubmit={onSubmit}>
                <Input
                  name="search"
                  label="Buscar"
                  type="text"
                  isLoading={isLoading}
                  search={onSubmit}
                />
              </form>
              {!!filter.search && (
                <span
                  onClick={() => {
                    methods.setValue('search', '')
                    setFilter({ page: 1, limit: 15, search: '' })
                  }}
                >
                  Limpar
                </span>
              )}
            </S.Form>
          </S.Filter>
        </FormProvider>

        {isLoading ? (
          <S.Loading>
            <Loading box={55} size={48} border={5} color="#7E33E0" />
          </S.Loading>
        ) : (
          <S.Wrapper>{renderProductsList()}</S.Wrapper>
        )}

        <Pagination
          end={products?.pages === products?.page}
          page={filter.page}
          handlePaginate={handlePagination}
        />
      </Container>
    </article>
  )
}
