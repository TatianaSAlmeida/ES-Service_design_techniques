import image from '/static/assets/horizontal_img.png';
import logo from '/static/assets/logo.png';
import { Link, Navigate } from "react-router-dom"

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './QRcode.css';
import React from "react";
import jwtDecode from 'jwt-decode';
import Popup from './Popup';




function QRcode() {

    const [user, setUser] = useState('1');
    const [buttonPopup, setButtonPopup] = useState(false);

    const pharmacistID = localStorage.getItem('data');
    console.log("ID: " + pharmacistID)


    const accessToken = localStorage.getItem('accessToken');
 

    // ================ User authentication ==========================
   
    const checkTokenExpiration = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            const decodedToken = await jwtDecode(accessToken);
            setUser(decodedToken);
            if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
                console.log("aqui");
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

    //===========================================================

    const navigate = useNavigate();

    //Generates a random prescription, based on the contents of the "public/ListOfDrugs.txt file"
    const generate = async () => {
        try {
            const response = await fetch("/static/assets/ListOfDrugs.txt");
            const content = await response.text();
            const dictionary = {};
            const lines = content.split("\r\n"); // split the text in lines

            lines.map((line, i) => {
                const l = line.split("--"); //split by "--"
                const randomNumber1 = Math.floor(Math.random() * 4) + 1; // generate random number between 1 and 5

                var key = l[0];
                
                var value = [l.slice(1), randomNumber1];
     
                dictionary[key] = value;
            });
            //console.log(dictionary);

            const randomNumber = Math.floor(Math.random() * 4) + 2; // generate random number between 2 and 5

            const entries = Object.entries(dictionary); // convert dictionary to array of key-value pairs
            const randomEntries = entries.sort(() => Math.random() - 0.5).slice(0, randomNumber); // shuffle array and extract the X random pairs

            const newDict = Object.fromEntries(randomEntries); // convert array back to dictionary

            
            console.log(newDict);
    
            navigate('/list', { state: newDict });
            

          } catch (error) {
            console.error(error);
          }

    }


    return(
        
        <div >
            <div className="logout">
                <button onClick={() => {setButtonPopup(true)}} className="btn-2"> Status </button>   
                <button onClick={() => logout()} className="btn-2"> Logout</button>  
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

            </Popup>
            
        <div className="body">

            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div> 

            <div className='items'>
                <div className='phrase'>
                “At our pharmacy, we prioritize your health and well-being 
                above all else, and we guarantee that you can trust us to
                provide the highest quality products and services to meet 
                your healthcare needs.”
                </div>
                <button className='btn' onClick={() => generate()}>
                    Scan QR code
                </button>    
            </div>
                    
        </div>
        </div>
       

    )
}

export default QRcode;