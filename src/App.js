import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './File/About'
import Contact from './File/Contact'
import Home from './File/Home'
import Navbar from './File/Navbar'

const App = () => {
  return (
    <div>
      {/* <h1>
        Hloo
      </h1> */}
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App