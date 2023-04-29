import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'

function Login(){
    
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);



    return (

        <div className="login">
            <div className="account">
                <img className="logo_saude" src={logo}></img>
                <input className="writingField" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input className="writingField" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => login()} className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error.msg}</div>)
                }
            </div>
        </div>
    )
}

export default Login