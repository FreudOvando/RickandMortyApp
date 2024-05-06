import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"



const ResidentCard = ({url}) => {


    const [resident, getResident] =  useFetch(url);
   
   

    useEffect(() => {
        getResident()
    },[]);
 

  
    
    return ( 
    <article className="min-w-[18rem] max-w-[30rem] w-auto h-auto m-2 mb-2 p-2 bg-slate-500 rounded-lg flex justify-center gap-2 items-center  flex-wrap shadow-md shadow-green-500 max-sm:flex-col">
<header className="relative">
    <img src={resident?.image} alt="" className="w-[15rem] h-[15rem] overflow-hidden rounded-lg shadow-lg shadow-black " />
    <div className="absolute top-0 left-0 z-10 ml-2 mt-2 bg-blue-500 bg-opacity-50 w-[7.5rem] h-[2.2rem] flex justify-center items-center ">
    <div id="status" className={` w-3 h-3 rounded-full flex flex-row justify-center items-center mr-2 ${resident?.status === 'Alive' ? 'bg-green-500' : (resident?.status === 'Dead' ? 'bg-red-500' : 'bg-yellow-500')}`}></div>
        <div id="resident-status" className="flex justify-end items-end text-2xl font-mono text-black-500">{resident?.status}</div>
    </div>
</header>

<section className="font-mono flex items-center flex-col ">
    <h3 className="text-2xl text-wrap text-center text-green-500"> {resident?.name} </h3>
    <hr className="" />
    <ul className="flex flex-wrap flex-col m-2 p-2">
        <li className="font-mono text-justify text-2xl text-wrap p-1  "><span>Specie:</span> {resident?.species} </li>
        <li className="font-mono text-justify text-2xl text-wrap p-1 flex flex-col"><span>Origin:</span> {resident?.origin.name} </li>
        <li className="font-mono text-justify text-2xl text-wrap p-1"><span>specie:</span> {resident?.episode.length} </li>
       
    </ul>
</section>
    </article>
    )

  
}

export default ResidentCard