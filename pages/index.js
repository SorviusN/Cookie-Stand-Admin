import Footer from '../components/footer.js'
import Main from '../components/main.js'
import Head from '../components/head.js'
import Link from "next/link"
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {

  const [store, setStore] = useState({});
  const [stores, setStores] = useState([]);
 
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  const hourFlux = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6 ]

  const addStore = (newStore) => {
    setStore(newStore);
    setStores([...stores, newStore]);
    console.log(stores);
  }

  //process.env.COOKIES_STAND_API
  const getStores = async () => {
    const response = await axios.get("https://salmon-cookie-api.azurewebsites.net/api/Store");
    const storesList = response.data;
    setStores(storesList)
  }

  // creating a method that will eventually be passed down as a prop.
  const deleteStore = async (e) => {
    e.preventDefault();
    id = e.target.value;
    const response = await axios.delete(`https://salmon-cookie-api.azurewebsites.net/api/Store/${id}`);
    console.log(response);
  }

  // Allows you to just run once, in which you call GetStores. Similar to Update method in Unity.
  useEffect(() =>{
    getStores();
  },[]);

  return (
    <>
      <Head/>
      <Header/>
      <Link href="/overview"><a>Overview page</a></Link>
      <div id="mainDiv">
        <Main addStore={addStore} deleteStore={deleteStore} stores={stores}/>
        {/* <pre>{JSON.stringify(store, undefined, 2)}</pre> */}
      </div >
      <Footer stores={stores}/>
    </>
  )
}

export default Home



