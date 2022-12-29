import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Business from './components/Business'
import Detail from './components/Detail'
import Home from './components/Home'
import Loan from './components/Loan'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/l' element={<Loan/>}/>
      <Route path='/b' element={<Business/>}/>
      <Route path='/d' element={<Detail/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App