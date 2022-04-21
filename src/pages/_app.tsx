import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'components'
import GlobalStyles from 'styles/global'
import * as theme from 'styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
