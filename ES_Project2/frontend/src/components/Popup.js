import React, { useEffect } from 'react'
import './Popup.css'
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import {useState } from "react"
import axios from 'axios'




function Popup(props){

    const [purchases, setPurchases] = useState({data: {d:'', da:''}});


    useEffect(() => {
        console.log("3");
        if(purchases){
            console.log("4");
            console.log(purchases);
    
        }
    }, [purchases]);
    
    const get_purchases = () => {
        axios.post('api/get_purchases/', {}).then(response => {
            console.log("a");
            console.log(response);
            setPurchases(response);
        } )
    }
    
    useEffect(() => {
        get_purchases();
    }, []);
    

    const listPurchases = 
        Object.keys(purchases).map((res) =>  
            
                <div>
                    <div className='row' >
                    

                    </div>
                </div>

    
    );
        

    return(props.trigger) ? ( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
                {listPurchases}
            </div>


        </div>
    ) : "";
}

export default Popup