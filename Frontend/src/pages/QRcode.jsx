
import image from '/src/assets/horizontal_img.png';
import logo from '/src/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './QRcode.css';

function QRcode() {

    const navigate = useNavigate();

    //Generates a random prescription, based on the contents of the "public/ListOfDrugs.txt file"
    const generate = async () => {
        try {
            const response = await fetch("/ListOfDrugs.txt");
            const content = await response.text();
            const dictionary = {};
            const lines = content.split("\r\n"); // split the text in lines

            lines.map((line, i) => {
                const l = line.split("--"); //split by "--"
                const randomNumber1 = Math.floor(Math.random() * 4) + 1; // generate random number between 1 and 5
                const d = {}
                d["drug"] = l[0];
                d["dosage"] = randomNumber1;
                const key = d;
                var value = l.slice(1);
                //console.log(value);
     
                dictionary[key] = value;
            });
            //console.log(dictionary);

            const randomNumber = Math.floor(Math.random() * 4) + 2; // generate random number between 2 and 5

            const entries = Object.entries(dictionary); // convert dictionary to array of key-value pairs
            const randomEntries = entries.sort(() => Math.random() - 0.5).slice(0, randomNumber); // shuffle array and extract the X random pairs

            const newDict = Object.fromEntries(randomEntries); // convert array back to dictionary

            
            console.log(newDict);
    
            navigate('/list', { state: newDict });
            

          } catch (error) {
            console.error(error);
          }

    }



    return(
        <div className="body">
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>    
            <div className='items'>
                <div className='phrase'>
                “At our pharmacy, we prioritize your health and well-being 
                above all else, and we guarantee that you can trust us to
                provide the highest quality products and services to meet 
                your healthcare needs.”
                </div>
                <button className='btn' onClick={() => generate()}>
                    Scan QR code
                </button>    
            </div>
                    
        </div>
    )
}

export default QRcode;