
import logo from '/static/assets/logo.png';
import image from '/static/assets/horizontal_img.png'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './ConfirmPayment.css';
import React from "react";
import jwtDecode from 'jwt-decode';
import Popup from './Popup';

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let paymentInformation = location.state;
  


  const redirect = () => {
    navigate("/")
  }
  const [user, setUser] = useState(undefined);
  const [buttonPopup, setButtonPopup] = useState(false);

    // ================ User authentication ==========================
   
    const checkTokenExpiration = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            const decodedToken = await jwtDecode(accessToken);
            setUser(decodedToken);
            if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
                  setUser(undefined);
              }
    
        }else{
            navigate('/');
    
        }
      
    
      };
    useEffect(() => {
        checkTokenExpiration();
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('data');
        setUser(undefined);
        checkTokenExpiration();

    }


   

    setInterval(checkTokenExpiration, 5 * 60 * 1000);

 
  return (
    <div>
            <div className="logout">
                <button onClick={() => {setButtonPopup(true)}} className="btn-2"> Status </button>   
                <button onClick={() => logout()} className="btn-2"> Logout</button>  
            </div>
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

    </div>
  )

}

export default ConfirmPayment