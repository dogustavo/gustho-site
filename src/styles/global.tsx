import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        outline: 0;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    html,
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 4.44vw;
        scroll-behavior: smooth;

        @media (min-width: 576px) {
            font-size: 3vw;
        }
        @media (min-width: 768px) {
            font-size: 2vw;
        }
        @media (min-width: 992px) {
            font-size: 0.8333333333vw;
        }
    }
    a, button {
        &:hover {
            cursor: pointer;
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-weight: 600;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        background: none;
        outline: none;
        padding: 0;
    }
`
