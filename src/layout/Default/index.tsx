import { ReactNode } from 'react'
import Head from 'next/head'

import { Header, Footer } from 'components'

type HeadProps = {
  children: ReactNode
  session: string
}

export default function LayoutDefault({ children, session }: HeadProps) {
  return (
    <>
      <Head>
        <title>Gustho | {session}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="Gustho - O melhor ecomerce da região"
        />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#7E33E0" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="application-name" content="Gustho" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gustho" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:url" content="https://gustho-site.vercel.app/" />
        <meta name="twitter:title" content="PWA App" />
        <meta
          name="twitter:description"
          content="Gustho - O melhor ecomerce da região"
        />
        <meta name="twitter:image" content="/static/img/icon-192.png" />
        <meta name="twitter:creator" content="@_dogustavo" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={session} key="ogtitle" />
        <meta
          property="og:description"
          content="Gustho - O melhor ecomerce da região"
          key="ogdesc"
        />
        <meta property="og:site_name" content="Gustho" />
        <meta
          property="og:url"
          content="https://gustho-site.vercel.app/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="/static/img/icon-512.png"
          key="ogimage"
        />

        <link rel="shortcut icon" href="/static/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/static/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/static/img/logo.svg" color="#7E33E0" />

        <link rel="apple-touch-icon" href="/static/img/icon-512.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/static/img/icon-512.png"
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
