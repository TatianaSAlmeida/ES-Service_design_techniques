
import image from '/src/assets/horizontal_img.png';
import './QRcode.css';

function QRcode() {


    return(
        <div className="body">
            <img src={image} className='img' alt="Image" />    
            <div className='items'>
                <div className='phrase'>
                “At our pharmacy, we prioritize your health and well-being 
                above all else, and we guarantee that you can trust us to
                provide the highest quality products and services to meet 
                your healthcare needs.”
                </div>
                <button className='btn'>
                    Scan QR code
                </button>    
            </div>
                    
        </div>
    )
}

export default QRcode