import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"



const ResidentCard = ({url}) => {


    const [resident, getResident] =  useFetch(url);
   
   

    useEffect(() => {
        getResident()
    },[]);
 

  
    
    return ( 
    <article className="min-w-[14rem] w-[20rem] h-auto m-2 mb-2 p-2 bg-slate-500 rounded-lg flex justify-center gap-2 items-center flex-col flex-wrap shadow-md shadow-green-500 max-sm:flex-col">
<header className="relative">
    <img src={resident?.image} alt="" className="w-[15rem] h-[15rem] " />
    <div className="absolute top-0 left-0 z-10 ml-2 mt-2 bg-blue-500 bg-opacity-50 w-[6rem] h-[2rem] flex justify-center items-center ">
        <div className=" w-3 h-3 bg-red-500 bg-opacity-80 rounded-full flex flex-row justify-center items-center mr-2"></div>
        <div className="flex justify-end items-end text-xl font-mono text-green-500">{resident?.status}</div>
    </div>
</header>

<section className="font-mono flex items-center flex-col ">
    <h3 className="text-2xl text-wrap text-center text-green-500"> {resident?.name} </h3>
    <hr className="" />
    <ul className="flex flex-wrap flex-col m-2 p-2">
        <li className="font-mono text-justify text-xl text-wrap "><span>Specie:</span> {resident?.species} </li>
        <li className="font-mono text-justify text-xl text-wrap"><span>Origin:</span> {resident?.origin.name} </li>
        <li className="font-mono text-justify text-xl text-wrap"><span>specie:</span> {resident?.episode.length} </li>
       
    </ul>
</section>
    </article>
    )

  
}

export default ResidentCard