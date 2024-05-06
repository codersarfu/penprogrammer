import React from 'react'
import Dedicated from "../assets/img/Dedicated.webp";
import materials from "../assets/img/materials.webp";
import LiveClass from "../assets/img/LiveClass.webp";

export default function Courses() {
  return (
    <div className="bg-[rgb(13,5,26)] pb-1">
     <h1 className="text-center pt-10 text-white font-bold text-5xl"> Complete guideline from absolute </h1>
     <h2 className="text-center pt-10 text-white font-bold text-5xl"> beginners to getting hired. </h2>
     <div className="ml-20">
    <div className="max-w-[1240px] rounded-5xl mx-auto my-10 md:grid grid-cols-3">
        <div className="md:w-[80%] ">
            <img src={Dedicated} alt="" className="ml-2 rounded-2xl" style={{width:"30%"}}/>
            <div className='bg-[rgba(242,242,243,0.2)]   pt-9  rounded-xl pb-10 pl-3' style={{marginTop:"-45px",marginLeft:"-10px"}}> 
            <h1 className="text-[rgb(0,128,122)] font-bold my-2 ml-3 text-2xl">Dedicated Support</h1>
            <p className="my-2 ml-3 mr-3 text-[rgba(237,237,240,0.64)] text-justify text-sm">
            Our dedicated support team is ready to address your queries,
             guide you through technical issues, and ensure a smooth and 
             enriching learning experience.
            </p>
            </div>
            
    </div>


    <div className="md:w-[80%] ">
            <img src={materials} alt="" className="ml-2 rounded-2xl" style={{width:"30%"}}/>
            <div className='bg-[rgba(242,242,243,0.2)]   pt-9  rounded-xl pb-5 pl-3 pr-2' style={{marginTop:"-45px",marginLeft:"-10px"}}> 
            <h1 className="text-[rgb(0,128,122)] font-bold my-2 ml-3 text-2xl">Learning Materials</h1>
            <p className="my-2 ml-3 mr-3 text-[rgba(237,237,240,0.64)] text-justify text-sm">
            Get learning materials, including downloadable resources, eBooks, code samples,
            and reference guides to enhance your understanding and provide valuable insights 
            beyond the course content.
            </p>
            </div>
            
    </div>


    <div className="md:w-[80%] ">
            <img src={LiveClass} alt="" className="ml-1 rounded-2xl" style={{width:"30%"}}/>
            <div className='bg-[rgba(242,242,243,0.2)]   pt-8 rounded-xl pb-2 pl-3 pr-6  w-35'  style={{marginTop:"-45px",marginLeft:"-5px"}}> 
            <h1 className="text-[rgb(0,128,122)] font-bold my-2 ml-1 text-2xl">Live Interactive Classes</h1>
            <p className="my-2 ml-2 mr-3 text-[rgba(237,237,240,0.64)]  text-justify text-sm">
            Instructor-led classes that offer real-time interaction and engagement.
            Participate in discussions, ask questions, and receive instant feedback,
             creating an authentic classroom experience from the comfort of your own space.
            </p>
            </div>
            
    </div>

 </div>
 </div>
 </div>
  )
} 