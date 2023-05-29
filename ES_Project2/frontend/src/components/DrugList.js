
import logo from '/static/assets/logo.png';
import image from '/static/assets/horizontal_img.png'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import './DrugList.css';
import React from "react";
import axios from 'axios';

function DrugList() {

    //   const drugList2 = {
    //      Abacavir: ['Volvo', 'Mercedes'], 
    //      Bacitracina: ['Audi', 'Seat'],
    //      Citrina: ['Ferrari', 'Ford']
    //   };
    const location = useLocation();
    const drugList2 = location.state;
    const pharmacistId = location.pharmacist;

    const prescription = {};
    useEffect(() => {
            createDictKeys()
        }, []);


    function handlePurchase(){
        axios.post('api/purchase/', {prescription, is_paid, purchase_status, client_name, pharmacistId});
        //navigate('/payment');
    }

    function createDictKeys(){
        Object.keys(drugList2).map((key, index) => prescription[index] = [drugList2[key][1], drugList2[key][0][0]]);
    }

    const listKeys = Object.keys(drugList2).map( (key, index) =>
        <div key={key} className='drug-row'>
            {key}
            <div className="selections">
                <input type="number" id={'drug-'+index} className="quantity" min="" defaultValue={drugList2[key][1]} onChange={prescription[index][0] = document.getElementById('drug-'+index).value}></input>

                <select className='selectBox' key={key} id={"select-"+index} onChange={prescription[index][1] = document.getElementById('select-'+index).value}>
                    {
                        drugList2[key][0].map((value) => 
                            <option class = "dropdown-content" id="option">
                                {value}
                            </option> 
                            
                        )
                    } 
                </select>
            </div>
        </div>
    );

    return(
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
                    <button className='btn' onClick={handlePurchase()}>
                        Submit
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default DrugList