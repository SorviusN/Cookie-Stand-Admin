import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Main from '../components/main.js'
import Head from '../components/head.js'
import Link from "next/link"

function Overview() {

  return (
    <>
      <Head/>
      <Header/>
      <div>
        <Link href="/"><a>Return to Main page</a></Link>
      </div>
      <Footer/>
    </>
  )
}

export default Overview