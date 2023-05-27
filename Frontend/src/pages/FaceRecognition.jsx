import image from '/src/assets/horizontal_img.png';
import logo from '/src/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import './FaceRecognition.css';


function Recognition() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    let scriptText = React.useRef(null);

    const [out, setOutput] = useState("Loading");



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

            <form className="grid" action="/result" method="POST">
                <div className="img-container" onClick={() => imageUploader.current.click()}>
                    <img className = 'img-profile' ref={uploadedImage}/>
                </div>
            
                <input type="file" accept = "image/*" onChange={uploadImage} ref={imageUploader} className = "img-input"  alt="Submit" />
                <center><input class="file_submit" type="Submit"/></center>
            </form>
            
            <b>Click to upload Image</b>
            
            {/* <div className="items">
                <button className='btn' onClick={() => runPythonFunction()}>Submit for approval</button>
            </div> */}

            <p>{out}</p>
            
        </div>
    )
}



export default Recognition