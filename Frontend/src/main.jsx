import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.jsx'
import GeneratePrescriptions from './pages/GeneratePrescriptions.jsx'
import DrugList from './pages/DrugList.jsx'
import QRcode from './pages/QRcode.jsx'
import FaceRecognition from './pages/FaceRecognition.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<QRcode />} />
      <Route path='/list' element={<DrugList />} />
      <Route path='/face-recognition' element={<FaceRecognition />} />
     </Routes>
  </BrowserRouter>

)
