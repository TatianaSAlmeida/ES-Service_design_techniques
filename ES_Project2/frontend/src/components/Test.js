import React, { Component } from "react";
import './Test.css';
import { useEffect, useState } from "react";


export default class Test extends Component {
  constructor(props) {
    super(props);
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [fileContent, setFileContent] = useState("");
  }

  render() {
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
    );
  }
}