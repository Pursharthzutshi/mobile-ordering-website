import React from "react";

import "./Header.css"

function Header(){
    return(
        <div id="header" className="text-white flex flex-col justify-center h-80 w-100 ">
            <p className="text-2xl font-bold mb-7">Mobile Website</p>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum nisi odio, sit amet porta massa euismod</p>
        </div>
    )
}

export default Header;