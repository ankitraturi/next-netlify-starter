import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ankitraturi.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my website" />
        <p className="description">
          Something more is coming here...
        </p>
      </main>

      <Footer />
    </div>
  )
}
