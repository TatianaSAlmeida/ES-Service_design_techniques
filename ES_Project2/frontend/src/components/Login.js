import React from "react";
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { useEffect, useState } from "react"
import background from '../../static/assets/login_background.png'
import axios from 'axios'
import jwtDecode from 'jwt-decode';
function Login(){
    
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [fileContent, setFileContent] = useState("");




    const checkTokenExpiration = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken ){
            const decodedToken = await jwtDecode(accessToken);
            setUser(decodedToken);

            if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
                  setUser(undefined);
              }
           
        }
    
    };
    useEffect(() => {
        checkTokenExpiration();
    }, []);


    setInterval(checkTokenExpiration, 5 * 60 * 1000);

    const login = () => {
        var error = []
        let val = 0
        if(!email){
            error.push("You must enter an email!");
            val = 1;
        }
        if(!password){
            error.push("You must enter a password!");
            val = 1;
        }
        setErrors(error)

        if(val === 0){
            axios.post('api/login/', { email, password })
            .then(res => {
                if(res.data.valid === '1') {
                    //====== TOKEN =========
                    const accessToken = res.data.access_token;
                    const refreshToken = res.data.refresh_token;

                    // Store the tokens in localStorage
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('data', res.data.id.toString());

                    const decodedToken = jwtDecode(accessToken);

                    setUser(decodedToken);
                } else {
                    setErrors(['Invalid email or password'])
                }
            })
            .catch(err => {
                setErrors(["Invalid email or password"])
            });
        }
    }



    return (
        user ?
        <Navigate to="/QRcode" />
        :
        <div className="login">
            
            <div className="account" >
                <input className="writingField" placeholder=" Email" type="email" onChange={(e) => {setEmail(e.target.value);}}/>
                <input className="writingField" placeholder=" Password" type="password" onChange={(e) => {setPassword(e.target.value);}}/>
                <button onClick={() => login()} className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error}</div>)
                }
            </div>
        </div>
    )
}

export default Login