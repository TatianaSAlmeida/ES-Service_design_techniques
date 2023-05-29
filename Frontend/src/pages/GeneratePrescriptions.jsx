import { Link, Navigate } from "react-router-dom"
import './GeneratePrescriptions.css'
import { useEffect, useState } from "react"

function GeneratePrescriptions(){


    const generate = async () => {
        try {
            const response = await fetch("/ListOfDrugs.txt");
            const content = await response.text();
            const dictionary = {};
            const lines = content.split("\n"); // split the text in lines

            lines.map((line, i) => {
                //console.log("aqui");
                const l = line.split("--"); //split by "--"
                const randomNumber1 = Math.floor(Math.random() * 4) + 1; // generate random number between 1 and 5
                const arr = [];
                console.log("olaaaa");
                //console.log(randomNumber1);
                arr.push(l[0]);
                arr.push(randomNumber1);
                const key = arr;
                //console.log(key);
                const value = l.slice(1);
                dictionary[key] = value;
            });
            console.log(dictionary);

            const randomNumber = Math.floor(Math.random() * 4) + 2; // generate random number between 2 and 5

            const entries = Object.entries(dictionary); // convert dictionary to array of key-value pairs
            const randomEntries = entries.sort(() => Math.random() - 0.5).slice(0, randomNumber); // shuffle array and extract the X random pairs

            const newDict = Object.fromEntries(randomEntries); // convert array back to dictionary


            //console.log(newDict);

          } catch (error) {
            console.error(error);
          }
    }

    return (

        <div className="generatePrescriptions">
            <button onClick={() => generate()} className="btn"> Generate Prescriptions </button>
            
        </div>
    )
}

export default GeneratePrescriptions