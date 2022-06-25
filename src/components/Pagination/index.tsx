import * as S from './styles'

interface IPagination {
  page: number
  end: boolean
  handlePaginate: (type: string) => void
}

export default function Pagination({ handlePaginate, page, end }: IPagination) {
  return (
    <S.Container>
      {page > 2 && (
        <S.Page onClick={() => handlePaginate('first')}>
          <p>1</p>
        </S.Page>
      )}

      <S.Page>
        <button disabled={page < 2} onClick={() => handlePaginate('prev')}>
          ant
        </button>
      </S.Page>

      <S.Wrapper>
        {page > 1 && (
          <S.Page>
            <p>{page - 1}</p>
          </S.Page>
        )}

        <S.Page active={true}>
          <p>{page}</p>
        </S.Page>

        {!end && (
          <S.Page onClick={() => handlePaginate('next')}>
            <p>{page + 1}</p>
          </S.Page>
        )}
      </S.Wrapper>

      <S.Page>
        <button disabled={end} onClick={() => handlePaginate('next')}>
          prox
        </button>
      </S.Page>
    </S.Container>
  )
}
