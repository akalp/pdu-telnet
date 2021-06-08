import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Remote PDU Control Service</title>
        <meta name="description" content="Remote PDU Control Service using Telnet by YTDM" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
