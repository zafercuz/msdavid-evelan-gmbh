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
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <NextSeo title="MSDavid - Evelan GmbH" />
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
