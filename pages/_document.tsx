import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Evelan gmbH NextJS & TypeScript assessment exam"
        />
        <meta name="keywords" content="Evelan gmbH, Next.js, TypeScript" />
        <meta name="author" content="MSDavid - Evelan GmbH" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
