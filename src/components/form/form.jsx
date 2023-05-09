import React from "react";



export function Form({ inputRef,handleSearch,handleSlect,selectRef}){
    return(
        <div className='container'>
             <form className='d-flex justify-content-between w-100 py-4'>
            <input ref={inputRef} className='form-control  w-50' type="search" onInput={handleSearch} placeholder="Search of a country..." />
            <select ref={selectRef}  onChange={handleSlect}>
         <option  >Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>

            </select>
        </form>
        </div>
       
    )
}