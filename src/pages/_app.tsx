import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AuthProvider, Notification } from 'components'
import GlobalStyles from 'styles/global'
import * as theme from 'styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './_app.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
      </Hydrate>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
