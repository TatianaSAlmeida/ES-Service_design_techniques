import React, { useEffect } from 'react'
import './Popup.css'
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import {useState } from "react"
import axios from 'axios'




function Popup(props){

    const [purchases, setPurchases] = useState(undefined);


    useEffect(() => {
        console.log("3");
        if(purchases){
            console.log("4");
            console.log(purchases);
    
        }
    }, [purchases]);
    
    const get_purchases = () => {
        axios.post('api/get_purchases/', {}).then(response => {
            console.log("yoooo");
            setPurchases(JSON.parse(response.data));

        } )
    }
    
    useEffect(() => {
        get_purchases();
    }, []);


    const listPurchases = 
                <div>
                   
                </div>;
        

    return(props.trigger) ? ( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
                <div>
                <div className='row'> 
                    <div className='column'> Prescription </div>
                    <div className='column'> Paid </div>
                    <div className='column'> Status </div>
                    <div className='column'> Client Name </div>

                </div>
                {purchases && purchases.map((item, index) => (
                    <div key={index} className= "row">
                        <div className='column'> {item.fields.prescription} </div>
                        <div className='column'>  {item.fields.is_paid.toString()} </div>
                        <div className='column'> {item.fields.purchase_status} </div>
                        <div className='column'> {item.fields.client_name} </div>
                    </div>
                ))}
                </div>;
            </div>


        </div>
    ) : "";
}

export default Popup