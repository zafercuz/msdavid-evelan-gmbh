import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <Head>
        <title>MSDavid - Evelan GmbH</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        {/* Used for React Query SSR Hydration */}
        <Hydrate state={pageProps.dehydratedState}>
          <main>
            <Component {...pageProps} />
          </main>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
