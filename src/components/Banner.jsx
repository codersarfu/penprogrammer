import React from 'react'
//import Typed from 'react-typed';

import HeaderPhoto from "../assets/img/HeaderPhoto.webp";

export default function Banner() {
  return (
    <div className="bg-[rgb(13,5,26)] w-full py-[2px]">
    <div className="max-w-[1000px] mx-auto  md:grid grid-cols-3 " style={{marginTop: "-100px"}} >
    <div className="col-span-2 md:w-[110%] ">
            <img src={HeaderPhoto} alt="" className="mt-10" style={{marginLeft: "-200px"}}/>
        </div>
        <div className='mt-[60%] w-[180%]' style={{marginLeft:"-130px"}}>
        <div className="col-span-1 flex flex-col">
            <h1 className="text-white text-4xl font-bold mt-20 my-1 ml-3 mr-3" >Welcome to</h1>
            <h2 className="text-[#00a4dfe1] text-6xl font-bold my-1 ml-3 mr-3">Pen Programmer</h2>
            <p className="my-1 ml-3 mr-3 text-left text-white"> 
            At Pen Programmer we are providing technical courses to train people who are interested in this field, 
            our mission is to empower people with the essential skills and knowledge to succeed in the fast-changing
            digital world. Our website is a top online hub that provides a wide variety of technical courses suitable
            for both beginners and experienced experts. 
            </p>
                        
        </div>
        </div>
        
    </div>
    </div>
  )
} 