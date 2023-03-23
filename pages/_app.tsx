import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@/styles/globals.scss'

// Create a client
const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}>
        <main>
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  )
}
