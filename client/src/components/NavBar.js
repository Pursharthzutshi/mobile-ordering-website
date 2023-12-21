import React from "react";
import {Router,Routes,Route,Link} from "react-router-dom";
import CatalogueMenu from "./CatalogueSubComponents/CatalogueMenu";
function NavBar(){
    return(
        <div className=" flex flex-row  h-13 ">
            <div className="fixed flex flex-row justify-around mt-0 w-full pt-4 h-14 bg-white shadow-md shadow-gray">
            <Routes className="">
            <Route path="/a" element={<CatalogueMenu/>}/>
            <Route path="/a" element={<CatalogueMenu/>}/>
            <Route path="/a" element={<CatalogueMenu/>}/>
            <Route path="/a" element={<CatalogueMenu/>}/>
            <Route path="/a" element={<CatalogueMenu/>}/>
            </Routes>

            <Link to="/a">Home</Link>            
            <Link to="/a">Home</Link>            
            <Link to="/a">Home</Link>            
            <Link to="/a">Home</Link>            
        </div>
        </div>

    )
}

export default NavBar;