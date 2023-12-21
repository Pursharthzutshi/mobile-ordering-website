import axios from "axios";
import React, { useEffect, useState } from "react";
// import image from "../images/images.jpg";

function CatalogueMenu({name,type,lowPrice,highPrice,processor,memory,OS}){
    
    const [mobileDataset,setMobileDataset] = useState([]);
    const [showNoResultFound,setShowNoResultFound] = useState(false);

    useEffect(()=>{

        axios.get(`https://mobile-ordering-website-server.vercel.app/showMobileDataset/showMobileDataset?name=${name}&type=${type}&lowPrice=${lowPrice}&highPrice=${highPrice}&memory=${memory}&processor=${processor}&OS=${OS}`).then((res)=>{
            
            try{
                if(res.data === undefined){
                    setShowNoResultFound(true);
                }else{
                    setShowNoResultFound(false);
                }
                
                setMobileDataset(res.data);
                
            }catch(err){
                console.log(err);
            }
        })    
    },[mobileDataset])

    return(
        <div className="flex flex-wrap justify-around">
                                        {/* <img  src={image}/> */}
                                        
            {showNoResultFound?<p className="flex flex-col mr-12 text-xl font-bold ">No Results Found</p>:
                mobileDataset.map((val)=>{
                    return(
                        <div>
                        <div className=" flex flex-col">
                            <div className="flex">
                            <img className="mt-10 w-auto h-40" src={val.image}/>
                            </div>
                            <div className="flex-row">
                            <p>{val.name} {val.type}</p>
                            <p>{val.memory}</p>
                            <p>Price: ₹{val.price}</p>
                            <button className="pt-.9 mt-5 pl-4 pr-4 pb-1 bg-blue-500 text-white">Add to cart</button>
                            </div>
                        </div>

                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default CatalogueMenu;