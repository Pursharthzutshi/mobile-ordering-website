import React, { useState } from "react";
import FilterOptions from "./CatalogueSubComponents/FilterOptions";
import CatalogueMenu from "./CatalogueSubComponents/CatalogueMenu";
import "../components/catalogueMenuPage.css"

function Catalogue(){

    const [name,setName] = useState("");

    const [type,setType] = useState("");

    const [lowPrice,setLowPrice] = useState("");
    const [highPrice,setHighPrice] = useState("");

    const [processor,setProcessor] = useState("");
    const [memory,setMemory] = useState("");
    const [OS,setOS] = useState("");
    
    // const [name,setName] = useState("");

    return(
        <div>
            <h2 className="text-xl font-bold text-center mt-10 ml-60">Our Products</h2>
            <div id="catalog-menu-page" className="flex flex-center justify-evenly">

            <div className="shadow-lg pl-10 pr-10" id="filter-options-div">
            <FilterOptions
            setName={setName} 
            setType={setType}
            setProcessor={setProcessor}
            setMemory={setMemory}
            setOS={setOS}
            setLowPrice={setLowPrice}
            setHighPrice={setHighPrice}
           />
</div>

<div className="mt-10 w-80" id="catalogue-menu-div">

            <CatalogueMenu id="catalogue-menu"
            name={name}
            type={type}
            processor={processor}
            memory={memory}
            OS={OS}
            lowPrice={lowPrice}
            highPrice={highPrice}
            />
            </div>

        </div>
        <br></br>
        </div>
    )
}

export default Catalogue;