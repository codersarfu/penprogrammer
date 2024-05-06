import React from 'react'
import Arifus from "../assets/img/Arifus.webp";
import Ashiqul from "../assets/img/Ashiqul.webp";
import Sadek from "../assets/img/Sadek.webp";

export default function OurStudent() {
  return (
    <div className="bg-[rgb(13,5,26)] pb-1">
        <h1 className="text-center text-[rgb(0,128,122)] text-5xl">Our Students</h1>
    <div className="max-w-[1240px] bg-[rgb(5,5,26)] rounded-5xl mx-auto my-10 md:grid grid-cols-3">
        <div className="col-span-1 md:w-[80%] text-center">
            <img src={Arifus} alt="" className="ml-2 rounded-lg"/>
            <h1 className="text-white text-2xl">Arifus Jaman</h1>
            <h1 className="text-white text-1xl">Web Development | Batch 1</h1>
        </div>
        <div className="col-span-1 md:w-[80%] text-center">
            <img src={Ashiqul} alt="" className="ml-2 rounded-lg"/>
            <h1 className="text-white text-2xl">Ashiqul Hoque</h1>
            <h1 className="text-white text-1xl">Web Development | Batch 1</h1>

       </div>
       <div className="col-span-1 md:w-[80%] text-center">
            <img src={Sadek} alt="" className="ml-2 rounded-lg"/>
            <h1 className="text-white text-2xl">Sadek Ali</h1>
            <h1 className="text-white text-1xl">Web Development | Batch 1</h1>

       </div>
    </div>
     </div>
  )
} 