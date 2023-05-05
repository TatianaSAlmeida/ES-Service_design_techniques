import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.jsx'
import GeneratePrescriptions from './pages/GeneratePrescriptions.jsx'
import DrugList from './pages/DrugList.jsx'
import QRcode from './pages/QRcode.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaymentMethod from './pages/PaymentMethod.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/list' element={<DrugList />} />
      <Route path='/qrcode' element={<QRcode />} />
      <Route path='/paymentMethod' element={<PaymentMethod />} />
     </Routes>
  </BrowserRouter>

)
