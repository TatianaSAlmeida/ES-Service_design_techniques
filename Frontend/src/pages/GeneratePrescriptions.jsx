import { Link, Navigate } from "react-router-dom"
import './GeneratePrescriptions.css'
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'

function GeneratePrescriptions(){

    const generate = () => {
       
    }

    return (

        <div className="generatePrescriptions">
            <button onClick={() => generate()} className="btn"> Generate Prescriptions </button>
            
        </div>
    )
}

export default GeneratePrescriptions