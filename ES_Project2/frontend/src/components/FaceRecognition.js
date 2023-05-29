import image from '/static/assets/horizontal_img.png';
import logo from '/static/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import './FaceRecognition.css';
import axios from 'axios';
import FormData from 'form-data'
import jwtDecode from 'jwt-decode';
import Popup from './Popup';

function Recognition() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const navigate = useNavigate();
    const [imageFile, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    const [user, setUser] = useState(undefined);
    const [buttonPopup, setButtonPopup] = useState(false);
  
      // ================ User authentication ==========================
     
      const checkTokenExpiration = async () => {
          const accessToken = localStorage.getItem('accessToken');
          if(accessToken){
              const decodedToken = await jwtDecode(accessToken);
              setUser(decodedToken);
              if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
                    setUser(undefined);
                }
      
          }else{
              navigate('/');
      
          }
        
      
        };
      useEffect(() => {
          checkTokenExpiration();
      }, []);
  
      const logout = () => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('data');
          setUser(undefined);
          checkTokenExpiration();
  
      }
  
  
     
  
      setInterval(checkTokenExpiration, 5 * 60 * 1000);
  
    //Uploads a image
    const uploadImage = e => {
        //Gets file from event
        const [file] = e.target.files;

        //Sees if file exists
        if (file) {
            setFile(file);
            const reader = new FileReader();
            const {current} = uploadedImage;

            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            
            reader.readAsDataURL(file);
        }
    };



    const handleSubmit = async () => {

        //Checks if image is selected
        if(uploadedImage.current.file) {

            console.log(uploadedImage);

            let formField = new FormData();
            formField.append("image", imageFile, uploadedImage.name);
            formField.append("payment_id", localStorage.getItem("purchaseID"));

            axios.post('/face_recognition_verifier/', formField)
                                        .then(async res => {
                                            console.log(res.data);
                                            
                                            if(res.data["name"]){
                                                let dict = {"name" : res.data["name"]}
                                                navigate('/confirm-payment', { state:  dict });
                                            }
                                            else{
                                                setErrorMessage("No valid user was identified. Please submit another image.")
                                            }
                                            
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        });
            
        };
    }

    return(
        <div>
            <div className="logout">
                <button onClick={() => {setButtonPopup(true)}} className="btn-2"> Status </button>   
                <button onClick={() => logout()} className="btn-2"> Logout</button>  
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

            </Popup>
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  

            <div className="img-container" onClick={() => imageUploader.current.click()}>
                <img className = 'img-profile' ref={uploadedImage}/>
            </div>
            
            <input type="file" accept = "image/*" onChange={uploadImage} ref={imageUploader} className = "img-input"  alt="Submit" />
            <b>Click picture to upload Image</b>
            
            <center><input class="btn" type="Submit" onClick={() => handleSubmit()} /></center>
     
            <b>{errorMessage}</b>
            
            {/* <div className="items">
                <button className='btn' onClick={() => runPythonFunction()}>Submit for approval</button>
            </div> */}

        </div>
        </div>
    )
}



export default Recognition