import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import '~slick-carousel/slick/slick.css'
import '~slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
