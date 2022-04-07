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
    }
    fonts: {
      light: number
      regular: number
      bold: number
    }
  }
}
