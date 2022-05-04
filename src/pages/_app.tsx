import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import { AuthProvider, Notification } from 'components'
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

        <Notification />

        <NextNprogress
          color="#FB2E86"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
      </ThemeProvider>
    </>
  )
}

export default MyApp
