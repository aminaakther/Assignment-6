



import Models from './component/Models'

import Active from './component/Active'
import Banner from './component/Banner'

import Footer from './component/Footer'
import GetStared from './component/GetStared'



import NavBar from './component/NavBar'
import Section from './component/Section'
import Simple from './component/Simple'
import Cart from './component/Cart'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
 

  return (
    <>
    <NavBar />
    <Banner />

    <Active />
    <Models modelPromise={modelPromise} />
    <Cart />
    <GetStared />
    <Simple />
    <Section />
    <Footer />


   
 
    </>
  )
}

export default App
