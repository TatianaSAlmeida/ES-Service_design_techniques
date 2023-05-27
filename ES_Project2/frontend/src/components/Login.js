import React from "react";
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { useEffect, useState } from "react"
import background from '../../static/assets/login_background.png'
import axios from 'axios'

function Login(){
    
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [fileContent, setFileContent] = useState("");

    const handleSubmit = async (e) => {
       
        console.log(email);
        console.log(password);
        axios.post('api/login/', { email, password })
                                    .then(async res => {
                                        console.log("funciona?");
                                        console.log(res);
                                        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
                                        console.log('After delay');
                                    })
                                    .catch(err => {
                                        console.log("nao funciona?");
                                        console.log(err);
                                    });
        console.log("yoo");
        
      };

    return (

        <div className="login">
            
            <div className="account" >
                <input className="writingField" placeholder=" Email" type="email" onChange={(e) => {setEmail(e.target.value);console.log(email)}}/>
                <input className="writingField" placeholder=" Password" type="password" onChange={(e) => {setPassword(e.target.value);console.log(password)}}/>
                <button onClick={() => handleSubmit()} className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error.msg}</div>)
                }
            </div>
        </div>
    )
}

export default Login