import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from './pages/HomePage'
import { Siginup } from './pages/Siginup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
function App() {
  return (
    <>
      {console.log("line 17")}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signup' element={<Siginup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/send' element={<SendMoney />}/>
        </Routes>
      </BrowserRouter>
      {console.log("line 26")}
    </>
  )
}

export default App