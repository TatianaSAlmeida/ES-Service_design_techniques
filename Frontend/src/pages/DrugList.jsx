
import logo from '/src/assets/logo.png';
import image from '/src/assets/horizontal_img.png'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import './DrugList.css';

function DrugList() {

    //   const drugList2 = {
    //      Abacavir: ['Volvo', 'Mercedes'], 
    //      Bacitracina: ['Audi', 'Seat'],
    //      Citrina: ['Ferrari', 'Ford']
    //   };
    const location = useLocation();
    const drugList2 = location.state;


    const listKeys = Object.keys(drugList2).map( (key) =>
        <div key={key} className='drug-row'>
            {key}
                <select className='selectBox' key={key}>
                    {
                        drugList2[key].map((value) => 
                            <option class = "dropdown-content">
                                {value}
                            </option> 
                        )
                    } 
                </select>
        </div>
    );

    return(
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  
            <div className='centered'>
                <div className='title'>List of drugs</div>
                <div className = "rectangle">
                    <div className='drug-list'>
                        <div className='drug'>
                            {listKeys}
                        </div>
                    </div>
                    <button className='btn'>
                        Submit
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default DrugList