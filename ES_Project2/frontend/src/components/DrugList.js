import logo from '/static/assets/logo.png';
import image from '/static/assets/horizontal_img.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import './DrugList.css';
import React from "react";
import axios from 'axios'
import jwtDecode from 'jwt-decode';
import Popup from './Popup';

function DrugList() {

    //   const drugList2 = {
    //      Abacavir: ['Volvo', 'Mercedes'], 
    //      Bacitracina: ['Audi', 'Seat'],
    //      Citrina: ['Ferrari', 'Ford']
    //   };



    const location = useLocation();
    const drugList2 = location.state;
    const is_paid = false
    const purchase_status = "Waiting Payment"
    const client_name = "Not defined"
    const pharmacist_id = parseInt(localStorage.getItem('data'));
    const prescription = {};
    const navigate = useNavigate();

    const [user, setUser] = useState(undefined);
    const [buttonPopup, setButtonPopup] = useState(false);

  
      // ================ User authentication ==========================
     
    const checkTokenExpiration =  () => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            const decodedToken = jwtDecode(accessToken);
            setUser(decodedToken);
            if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
                setUser(undefined);
            }
    
        }else{
            navigate('/');
    
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('data');
        setUser(undefined);
        checkTokenExpiration();
    }
        
    useEffect(() => {
        checkTokenExpiration()
    }, []);
  

    createDictKeys()

    setInterval(checkTokenExpiration, 5 * 60 * 1000);
  


    function handlePurchase(){
        axios.post('api/createPurchase/', {prescription, is_paid, purchase_status, client_name, pharmacist_id})
             .then( response => { 
                localStorage.setItem('purchaseID', response.data["id"]);})
             .finally(() => {
                navigate('/face-recognition');
            });
    }

    function createDictKeys(){
        Object.keys(drugList2).map((key, index) => prescription[index] = [drugList2[key][1], drugList2[key][0][0]]);
    }

    const listKeys = Object.keys(drugList2).map( (key, index) =>
        <div key={key} className='drug-row'>
            {key}
            <div className="selections">
                <input type="number" id={'drug-'+index} className="quantity" min="" defaultValue={drugList2[key][1]} onChange={() => {if(document.getElementById('drug-'+index).value){ prescription[index][0] = document.getElementById('drug-'+index).value }}}></input>

                <select className='selectBox' key={key} id={"select-"+index} onChange={() => {if(document.getElementById('select-'+index).value){prescription[index][1] = document.getElementById('select-'+index).value}}}>
                    {
                        drugList2[key][0].map((value) => 
                            <option className = "dropdown-content" id="option">
                                {value}
                            </option> 
                            
                        )
                    } 
                </select>
            </div>
        </div>
    );

    return(
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
            <div className='centered'>
                <div className = "rectangle">

                <div className='title'>List of drugs</div>
                    <div className='drug-list'>
                        <div className='drug'>
                            {listKeys}
                        </div>
                    </div>
                    <button className='btn' onClick={() => {handlePurchase()}}>
                        Submit
                    </button>
                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default DrugList