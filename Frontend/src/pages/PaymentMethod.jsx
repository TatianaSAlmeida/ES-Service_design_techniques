import logo from '/src/assets/logo.png';
import image from '/src/assets/horizontal_img.png'

import cash from '/src/assets/cash.png'
import creditCard from '/src/assets/credit-card.png'
import faceRecognition from '/src/assets/face-recognition.png'


import './PaymentMethod.css';


function PaymentMethod(){
    return (
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  
            <div className='centered'>
                <div className='title'>Payment Method</div>
                <div className='img-row'>
                    <div className='img-column'>
                        <img className='payment-img' src={cash} onClick={() => {<div></div>}}></img>
                        <div className='words'> Cash </div>
                    </div>
                    
                    <div  className='img-column'>
                        <img className='payment-img' src={creditCard} onClick={() => {<div></div>}}></img>
                        <div className='words'> Credit Card </div>
                    </div>
                    
                    <div  className='img-column'>
                        <img className='payment-img' src={faceRecognition} onClick={() => {<div></div>}}></img>
                        <div className='words'> Face Recognition </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PaymentMethod