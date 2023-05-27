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
    
    const handleImageUpload = e => {
        const [file] = e.target.files;
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

    return(
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  



            
            <div className="img-container" onClick={() => imageUploader.current.click()}>
                <img className = 'img-profile' ref={uploadedImage}/>
            </div>

            <input type="file" accept = "image/*" onChange={handleImageUpload} ref={imageUploader} className = "img-input"  alt="Submit" />
            
            <b>Click to upload Image</b>
            
            <button>Submit for approval</button>
            
        </div>
    )
}



export default Recognition