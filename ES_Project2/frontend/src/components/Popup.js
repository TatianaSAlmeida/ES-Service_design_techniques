import React, { useEffect } from 'react'
import './Popup.css'
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import {useState } from "react"
import axios from 'axios'




function Popup(props){

    const [purchases, setPurchases] = useState(undefined);


    
    
    const get_purchases = () => {
        axios.post('api/get_purchases/', {}).then(response => {
            setPurchases(JSON.parse(response.data));

        } )
    }
    
    useEffect(() => {
        get_purchases();
    }, []);


    const listPurchases = 
                <div>
                   
                </div>;
        

        return props.trigger ? (
            <div className="popup">
              <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                  close
                </button>
                {props.children}
                <div>
                  <div className="rowh">
                    <div className="column">Prescription</div>
                    <div className="column">Paid</div>
                    <div className="column">Status</div>
                    <div className="column">Client Name</div>
                  </div>
                  {purchases &&
                    purchases.map((item, index) => (
                      <div key={index} className="row">
                        <div className="column">
                          {item.fields.prescription && (
                            <div className="drugList">
                              {Object.entries(
                                JSON.parse(
                                  item.fields.prescription.replace(/'/g, '"')
                                )
                              ).map(([key, value]) => (
                                <div key={key} className= 'row1'>
                                  <div className="n">{value[0]}x</div>
                                  <div className="n">{value[1].replace(" ", '')}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="column">{item.fields.is_paid.toString()}</div>
                        <div className="column">{item.fields.purchase_status}</div>
                        <div className="column">{item.fields.client_name}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : null;
}

export default Popup