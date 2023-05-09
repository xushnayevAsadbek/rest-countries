import React from "react";

export function Header(){
    return(
        <header className='shadow'>
            <div className='container'>
                <div className='d-flex justify-content-between py-4'>
                    <a href="#" style={{
                        color:"black",
                        textDecoration:"none",
                        fontSize:"24px",
                        fontStyle:"normal",
                        fontWeight:"800px",
                        fontFamily:"sans-serif"
                    }}> Where in the world</a>
                    <button className='border  bg-white text-dark'>Dark Mode</button>
                </div>


            </div>

        </header>
    )
}