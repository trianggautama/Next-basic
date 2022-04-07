import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Fragment } from 'react'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <meta name="description" content="default" />
      <Head>
        <title>Course</title>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Fragment>
  )
}

export default MyApp
