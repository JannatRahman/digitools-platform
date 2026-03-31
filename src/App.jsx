import { useState } from 'react'
import './App.css'
import ActiveUsers from './components/ActiveUsers'
import Banner from './components/Banner'
import Cart from './components/Cart'
import DataCard from './components/DataCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Setup from './components/Setup'
import Workflow from './components/Workflow'

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

const dataPromise = getData();

function App() {
 const [toggleTab, setToggleTab] = useState("products")
const [carts, setCarts] = useState([]);


  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Banner></Banner>

 <div className='text-center space-y-2 mb-7'>
        <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
        <p className='text-sm  text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
          

</div>

<div className="tabs justify-center pb-10 gap-2">
  
  <input type="radio" name="my_tabs_1" className={`tab text-white rounded-full w-40 transition-all duration-300 ${
    toggleTab === "products" 
    ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white scale-105 shadow-lg"
    : "bg-gray-300 text-black hover:bg-gray-300"
  }`} aria-label="Products"
  onClick={() => setToggleTab("products")}
   defaultChecked />

  <input type="radio" name="my_tabs_1" className={`tab text-white rounded-full w-40 transition-all duration-300 ${
    toggleTab === "cart" 
    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white scale-105 shadow-lg"
    : "bg-gray-300 text-black hover:bg-gray-300"
  }`} 
  
  aria-label={`Cart (${carts.length})`}
  onClick={() => setToggleTab("cart")}  
  />
        </div>

    {toggleTab === "products" && <DataCard dataPromise={dataPromise} carts={carts} setCarts={setCarts}></DataCard>}

    {toggleTab === "cart" &&<Cart carts={carts} setCarts={setCarts}></Cart>}

    <ActiveUsers></ActiveUsers>
    <Setup></Setup>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
    
    </>
  )
}

export default App
