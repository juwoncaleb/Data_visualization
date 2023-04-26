import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="icon" href="https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__10__zn7YAAwIR.webp?updatedAt=1682516186976" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

