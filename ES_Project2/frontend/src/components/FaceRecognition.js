import image from '/static/assets/horizontal_img.png';
import logo from '/static/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import './FaceRecognition.css';
import axios from 'axios';


function Recognition() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    let scriptText = React.useRef(null);

    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    //Uploads a image
    const uploadImage = e => {
        //Gets file from event
        const [file] = e.target.files;

        //Sees if file exists
        if (file) {
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
            axios.post('/face-recognition/', { })
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
    }


    // const runRekognitionScript = async(code) => {
    //     const pyodide = window.pyodide;

    //     return await pyodide.runPythonAsync(code);
    // }

    return(
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
     
            
            
            {/* <div className="items">
                <button className='btn' onClick={() => runPythonFunction()}>Submit for approval</button>
            </div> */}

        </div>
    )
}



export default Recognition