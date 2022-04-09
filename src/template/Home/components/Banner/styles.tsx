import styled from 'styled-components'
import { breakpoints } from 'styles'

export const List = styled.div`
  position: relative;

  .slick-slider {
    .slick-dots {
      position: absolute;
      bottom: 10px;
      left: 25%;
      padding: 0 2rem;

      text-align: left;

      @media (max-width: ${breakpoints.small}) {
        left: 0;
        text-align: center;
      }

      li {
        display: inline-block;

        &.slick-active {
          div {
            background-color: ${({ theme }) => theme.colors.pink};
          }
        }
      }

      div {
        width: 21px;
        height: 12px;

        transition: background 0.4s ease;
        cursor: pointer;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.pink};
      }
    }
  }
`

export const WrapImage = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;

  @media (max-width: ${breakpoints.small}) {
    height: 40vh;
  }
`
