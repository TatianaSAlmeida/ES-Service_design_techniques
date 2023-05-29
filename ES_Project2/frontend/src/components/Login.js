import React from "react";

import axios from 'axios'
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { useEffect, useState } from "react"
import background from '/static/assets/login_background.png'
import { useNavigate } from 'react-router-dom';



function Login(){
    
    const [user, setUser] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [fileContent, setFileContent] = useState("");


    const navigate = useNavigate();


    function showFile() {
        axios.post('api/login/', {email, password})
             .then(res => {
                setUser(res.data.id);
            }).finally(() => {
                console.log(user)
                navigate('/qrcode', { state: user });
            });
        
    }

    return (

        <div className="login">

            <div className="account" >
                <input className="writingField" placeholder=" Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input className="writingField" placeholder=" Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => showFile()} className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error.msg}</div>)
                }
            </div>
        </div>
    )
}

export default Login