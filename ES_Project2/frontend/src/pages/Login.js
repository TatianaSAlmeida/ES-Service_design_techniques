import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { useEffect, useState } from "react"
import background from '../assets/login_background.png'

function Login(){
    
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [fileContent, setFileContent] = useState("");


    ```
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          //const response = await axios.post('/api/login/', { email, password });
          // Handle successful login
          //console.log(response.data.message);
        } catch (error) {
            //setErrors(error.response.data.message)
          // Handle login error
          //setError(error.response.data.message);
        }
      };
      ```
    return (
        <div className="login">
            <div className="account" >
                <input className="writingField" placeholder=" Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input className="writingField" placeholder=" Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button  className="btn"> Login </button>
                {
                    errors.map((error, index) => <div key={index} className="error">{error.msg}</div>)
                }
            </div>
        </div>
    )
}

export default Login