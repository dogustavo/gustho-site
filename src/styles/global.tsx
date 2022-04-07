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
        font-size: 1em;
        scroll-behavior: smooth;
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
