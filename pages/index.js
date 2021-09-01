import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Form from '../components/form.js'
import Head from '../components/head.js'
import { useState } from 'react'

function Home() {

  const [store, setStore] = useState({});

  const addStore = (newStore) => {
    setStore(newStore);
  }

  return (
    <>
      <Head/>
      <Header/>
      <div>
        <Form onSubmit={addStore}/>
        <pre>{JSON.stringify(store, undefined, 2)}</pre>
      </div>
      <Footer/>
    </>
  )
}

export default Home
