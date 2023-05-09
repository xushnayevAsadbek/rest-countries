
import React from "react";


export function Card({flag,name,population,region,capital}){
    return(
       <>
        <li className="shadow p-3 bg-light text-dark">
         <img width={200} height={200} src={flag} alt="counter flag" />
        <h3 className="mt-3" 
        style={{ width:'200px' }}>
            {name}
            </h3>
        <p><b>Population</b> {population}</p>
        <p><b>Region</b> {region}</p>
        <p><b>Capital</b> {capital}</p>

        </li>
       </> 
    )
}