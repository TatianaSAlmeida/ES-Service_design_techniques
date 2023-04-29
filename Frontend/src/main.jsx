import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DrugList from './DrugList.jsx'
import QRcode from './QRcode.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<QRcode />} />
      <Route path='/list' element={<DrugList />} />
    </Routes>
  </BrowserRouter>
)
