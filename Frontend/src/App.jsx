import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import axios from "axios";


function App() {

  var name = "";

  function refreshList(){
    axios
      .get("/api/homepage/")
      .then((res) => this.setState({ name: res.data }))
      .catch((err) => console.log(err));
  };
  
  function handleSubmit () {
    axios.put('/api/homepage/edgar')
         .then((res) => refreshList())
  
  }

  return (
    <div>
      <span
          onClick={() => handleSubmit()}
        >asdasdasdasd</span>
    </div>
    
    )
}

export default App
