<<<<<<< Updated upstream
import App from "./components/App";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.js'
import DrugList from './components/DrugList.js'
import QRcode from './components/QRcode.js'
import ConfirmPayment from './components/ConfirmPayment.js'
import FaceRecognition from './components/FaceRecognition.js'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/QRcode' element={<QRcode />} />
        <Route path='/list' element={<DrugList />} />
        <Route path='/face-recognition' element={<FaceRecognition />} />
        <Route path='/finalizePayment' element={<ConfirmPayment />} />
       </Routes>
    </BrowserRouter>
  
  )

>>>>>>> Stashed changes
