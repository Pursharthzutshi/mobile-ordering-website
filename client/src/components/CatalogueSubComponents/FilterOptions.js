import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css"

function FilterOptions({setName,setType,setLowPrice,setHighPrice,setProcessor,setMemory,setOS}){


const clearFilterValues = (e) =>{
    e.preventDefault()
    const allRadioButtons = document.querySelectorAll("input");

    for(let i =0 ; i < allRadioButtons.length;i++){
        if(allRadioButtons[i].checked = true){
            allRadioButtons[i].checked = false
            setName("");
            setType("");
            setHighPrice("");
            setProcessor("")
            setMemory("");
            setOS("");
        }
         
    }


}

    return(
        <div className="flex flex-col gap-4 pb-6">
            <h2>Filter Options</h2>
            <input placeholder="Search Name" onChange={(e)=>setName(e.target.value)} className="pb-1 pl-3 border-2" type="search"/>

{/* <form onSubmit={test}>
    <input  type="radio" name="a" />
    <input  type="radio" name="a" />
    <input  type="radio" name="a" />
    <button onClick={test}>clear</button>
</form> */}

            <form className="flex flex-col gap-4 pb-6">

            <button className="pt-1 mt-2 pl-4 pr-4 pb-1 bg-blue-500 text-white" onClick={clearFilterValues}>Clear All Filter</button>

            <h2 className="text-start text-md font-bold">PRICE</h2>

            <div className = "flex flex-row gap-2">
            <label>Above ₹10000</label>
            <input value = '10000' onChange={(e)=>setHighPrice(e.target.value)} type="radio" name="price"/>
            </div>

            <div className = "flex flex-row gap-2">

            <label>Above ₹15000</label>
            <input value = '15000' type="radio" onChange={(e)=>setHighPrice(e.target.value)} name="price"/>

            </div>

            <div className = "flex flex-row gap-2">

            <label>Above  ₹20000</label>
            <input value = '20000' type="radio" onChange={(e)=>setHighPrice(e.target.value)} name="price"/>

            </div>

            <div className = "flex flex-row gap-2">

            <label>Above ₹30000</label>
            <input value = '30000' type="radio" onChange={(e)=>setHighPrice(e.target.value)} name="price"/>

            </div>

            <div className = "flex flex-row gap-2">

            <label>Above ₹40000</label>
            <input value="40000" type="radio" onChange={(e)=>setHighPrice(e.target.value)} name="price"/> 

            </div>


            <h2 className="text-start text-md font-bold">NAME</h2>

 
<div className = "flex flex-row gap-2">
<label >Redmi</label>
<input onChange={(e)=>{setName(e.target.value)}} value="Redmi" type="radio" name="mobile-name"/>
</div>
<div className = "flex flex-row gap-2">

<label>One Plus</label>
<input onChange={(e)=>{setName(e.target.value)}} value="One Plus" type="radio" name="mobile-name"/>

</div>
<div className = "flex flex-row gap-2">

<label>Vivo</label>
<input onChange={(e)=>{setName(e.target.value)}} value="Vivo" type="radio" name="mobile-name"/>
</div>


<div className = "flex flex-row gap-2">

<label>Google</label>
<input onChange={(e)=>{setName(e.target.value)}} value="Google Pixel" type="radio" name="mobile-name"/>
</div>

<div className = "flex flex-row gap-2">

<label>iPhone</label>
<input onChange={(e)=>{setName(e.target.value)}} value="iPhone" type="radio" name="mobile-name"/>
</div>


          <div className = "flex flex-row gap-2">
           
           <label>Samsung</label>
           <input onChange={(e)=>{setName(e.target.value)}} value="Samsung" type="radio" name="mobile-name"/>
          </div>
          <div className = "flex flex-row gap-2">
           
           <label>Oppo</label>
           <input onChange={(e)=>{setName(e.target.value)}} value="Oppo" type="radio" name="mobile-name"/>
          </div>  


<h2 className="text-start text-md font-bold">TYPE</h2>

<div className = "flex flex-row gap-2">
<label className="whitespace-nowrap">Redmi 12 Smartphone</label>
<input onChange={(e)=>{setType(e.target.value)}} value="12 Smartphone" type="radio" name="type"/>
</div>
<div className = "flex flex-row gap-2">

<label>One Plus Nord CE2</label>
<input onChange={(e)=>{setType(e.target.value)}} value="Nord CE2" type="radio" name="type"/>

</div>
<div className = "flex flex-row gap-2">

<label>Vivo V27</label>
<input onChange={(e)=>{setType(e.target.value)}} value="V27" type="radio" name="type"/>
</div>

<div className = "flex flex-row gap-2">

<label>Redmi Note 11</label>
<input onChange={(e)=>{setType(e.target.value)}} value="Note 11" type="radio" name="type"/>
</div>

<div className = "flex flex-row gap-2">

<label>Google Pixel 7 Pro</label>
<input onChange={(e)=>{setName(e.target.value)}} value="7 Pro" type="radio" name="type"/>
</div>
<div className = "flex flex-row gap-2">

<label>iPhone Pro Max 14</label>
<input onChange={(e)=>{setType(e.target.value)}} value="Pro max 14" type="radio" name="type"/>
</div>




          <div className = "flex flex-row gap-2">
           
           <label>Samsung s23</label>
           <input onChange={(e)=>{setType(e.target.value)}} value="s23" type="radio" name="type"/>
          </div>
          <div className = "flex flex-row gap-2">
           
           <label>Oppo A76</label>
           <input onChange={(e)=>{setType(e.target.value)}} value="A76" type="radio" name="type"/>
          </div>  
          


            {/* <input type="radio"/>
            <label>Samsung</label>
            <input type="radio"/> */}

            {/* <h2>type</h2>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            <h2>processor</h2> */}
            <h2 className="text-start text-md font-bold">PROCESSOR</h2>
            
            <div className = "flex flex-row gap-2">

            <label>Snapdragon 8 Gen</label>
            <input onChange={(e)=>{setProcessor(e.target.value)}} value="Snapdragon 8 Gen" type="radio" name="processor"/>

            </div>

            <div className = "flex flex-row gap-2">

            <label>A15 BionicApple</label>
            <input onChange={(e)=>{setProcessor(e.target.value)}} value="A15 BionicApple" type="radio" name="processor"/>
            </div>
            <div className = "flex flex-row gap-2">

<label>A16 Bionic chip</label>
<input onChange={(e)=>{setProcessor(e.target.value)}} value="A16 Bionic chip" type="radio" name="processor"/>
</div>
            
            <div className = "flex flex-row gap-2">

            <label>Dimensity 9000</label>
            <input onChange={(e)=>{setProcessor(e.target.value)}} value="Dimensity 9000" type="radio" name="processor"/>
            
            </div>
            <div className = "flex flex-row gap-2">

<label>Google Tensor G3</label>
<input onChange={(e)=>{setProcessor(e.target.value)}} value="Google Tensor G3 9000" type="radio" name="processor"/>

</div>


            {/* <label>Dimensity 9200MediaTek</label>
            <input value="Dimensity 9000 PlusMediaTek" type="radio"/> */}

            <h2 className="text-start text-md font-bold">MEMORY</h2>
            

           
           <div className = "flex flex-row gap-2">
           
            <label>64GB</label>
            <input onChange={(e)=>{setMemory(e.target.value)}} value="64GB" type="radio" name="memory"/>
           
           </div>
           <div className = "flex flex-row gap-2">
           
            <label>128GB</label>
            <input onChange={(e)=>{setMemory(e.target.value)}} value="128GB" type="radio" name="memory"/>
           
           </div>
           
           <div className = "flex flex-row gap-2">
           
            <label>256GB</label>
            <input onChange={(e)=>{setMemory(e.target.value)}} value="256GB" type="radio" name="memory"/>
            
            </div>
            <div className = "flex flex-row gap-2">
           
           <label>512GB</label>
           <input onChange={(e)=>{setMemory(e.target.value)}} value="512GB" type="radio" name="memory"/>
           
           </div>

            <h2 className="text-start text-md font-bold">OS</h2>
           
            <div className = "flex flex-row gap-2">
           
            <label>Android</label>
            <input onChange={(e)=>{setOS(e.target.value)}} value="android" type="radio" name="OS"/>
           
           </div>

           <div className = "flex flex-row gap-2">

            <label>IOS</label>
            <input onChange={(e)=>{setOS(e.target.value)}} value="ios" type="radio" name="OS"/>
            </div>
            <div className = "flex flex-row gap-2">
           
            <label>Windows</label>
            <input onChange={(e)=>{setOS(e.target.value)}} value="windows" type="radio" name="OS"/>
           </div>

           </form>
        </div>
    )
}

export default FilterOptions;