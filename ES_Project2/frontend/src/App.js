import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<p />} />
     </Routes>
  </BrowserRouter>

)