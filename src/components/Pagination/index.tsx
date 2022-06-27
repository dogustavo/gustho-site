import { useEffect } from 'react'
import * as S from './styles'

interface IPagination {
  page: number
  end: boolean
  handlePaginate: (type: string) => void
}

export default function Pagination({ handlePaginate, page, end }: IPagination) {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [page])

  return (
    <S.Container>
      {page > 2 && (
        <S.Button onClick={() => handlePaginate('first')}>
          <img src="/static/img/chevrons.svg" alt="Primeira página" />
        </S.Button>
      )}

      <S.Button disabled={page < 2} onClick={() => handlePaginate('prev')}>
        <img src="/static/img/chevron.svg" alt="Anterior" />
      </S.Button>

      <S.Wrapper>
        {page > 1 && (
          <S.Page onClick={() => handlePaginate('prev')}>
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

      <S.Button
        reverted={true}
        disabled={end}
        onClick={() => handlePaginate('next')}
      >
        <img src="/static/img/chevron.svg" alt="Proximo" />
      </S.Button>
    </S.Container>
  )
}
