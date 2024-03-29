import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pink: string
      offBlue: string
      red: string
      blue: string
      violet: string
      white: string
      black: string
      gray: string
      shade: {
        light: string
        dark: string
        text: string
      }
      subText: string
    }
    fonts: {
      light: number
      regular: number
      bold: number
    }
  }
}
