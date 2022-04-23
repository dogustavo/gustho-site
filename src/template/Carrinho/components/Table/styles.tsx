import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`

export const TH = styled.th`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.2rem;

  color: ${({ theme }) => theme.colors.offBlue};
`

export const TD = styled.td`
  border-bottom: 1px solid #e1e1e4;
  padding: 1rem 0;
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 5px;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 0.875rem;

    color: ${({ theme }) => theme.colors.black};
  }
`
