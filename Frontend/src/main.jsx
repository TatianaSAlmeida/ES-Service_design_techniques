import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DrugList from './DrugList.jsx'
import QRcode from './QRcode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QRcode />
  </React.StrictMode>,
)
