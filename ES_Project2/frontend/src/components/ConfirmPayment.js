
import logo from '/static/assets/logo.png';
import image from '/static/assets/horizontal_img.png'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './ConfirmPayment.css';
import React from "react";


const ConfirmPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let paymentInformation = location.state;
  


  useEffect(() => {
    if(paymentInformation === undefined || paymentInformation === null){
      navigate("/");
    }
  }, []);


 
  return (

    <div className='body'>
      <div className='images'>
          <img src={logo} className='logo' alt="Logo" />    
          <img src={image} className='img' alt="Image" />
      </div>  

      <p>{paymentInformation["name"]}</p>
      
    </div>

      
  )

}

export default ConfirmPayment