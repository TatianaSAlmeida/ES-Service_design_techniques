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

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'));
        if(data)
            setUser(data.user);
    }, []);
    
    const login = () => {
        axios.post('api/login/', { email, password })
        .then(response => response.data)
        .then(data => {
            if(data.message) {
                console.log(user);
                localStorage.setItem('data', JSON.stringify(data));
                setUser(data.user);
                console.log(data.message);
                console.log(user);
            } else {
                setErrors(data.errors);
                console.log("erros")
            }
        }).catch(err => console.log(err));
    }

    return (
        user ?
        <Navigate to="/QRcode" />
        :
        <div className="login">
            
            <div className="account" >
                <input className="writingField" placeholder=" Email" type="email" onChange={(e) => {setEmail(e.target.value);console.log(email)}}/>
                <input className="writingField" placeholder=" Password" type="password" onChange={(e) => {setPassword(e.target.value);console.log(password)}}/>
                <button onClick={() => login()} className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error.msg}</div>)
                }
            </div>
        </div>
    )
}

export default Login