import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
