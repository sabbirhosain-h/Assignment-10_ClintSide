import React from 'react'
import Navber from '../Components/Navber'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

function App() {
 

  return (
    <>
     <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App;
