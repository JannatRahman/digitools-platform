import './App.css'
import ActiveUsers from './components/ActiveUsers'
import Banner from './components/Banner'
import DataCard from './components/DataCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Setup from './components/Setup'
import Workflow from './components/Workflow'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <DataCard></DataCard>
    <ActiveUsers></ActiveUsers>
    <Setup></Setup>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
    
    </>
  )
}

export default App
