
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
  


  const redirect = () => {
    navigate("/")
  }




 
  return (

    <div className='body'>
      <div className='images'>
          <img src={logo} className='logo' alt="Logo" />    
          <img src={image} className='img' alt="Image" />
      </div>  


      <div class="textbox">
        {paymentInformation ? (
          <>
          Payments of <b>{paymentInformation["name"]}</b> was accepted. Robot will now start its operation.
          <br></br>
          <button class="btn_close" onClick={() => redirect()}>Close</button>
          </>
        ) : (
          <>
          Payment information not available
          <button class="btn_close" onClick={() => redirect()}>Close</button>
          </>
        )}
        
      </div>

      
    </div>

      
  )

}

export default ConfirmPayment