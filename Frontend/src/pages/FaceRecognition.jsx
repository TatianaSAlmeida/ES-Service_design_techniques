import image from '/src/assets/horizontal_img.png';
import logo from '/src/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './FaceRecognition.css';

function Recognition() {
    const [image, setImage] = useState("");
    var state = {
        picture: false,
        src: false
    }
    return(
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  



            <input type="file" width="40" height="40" alt="Submit"/>

            <div className = 'img-container'>
                <img className = 'img-profile'/>
            </div>
            
        </div>
    )
}



export default Recognition