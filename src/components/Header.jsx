import React, { useState } from "react"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Header() {

    const [toggle,setToggle] = useState(false);

return (
    <div className="bg-[#050a1a] p-4">
        <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto"> 
        <div className="text-3xl font-bold text-white">
            PEN PROGRAMMER
        </div>
        {
            toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block"/> 
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
        }
         
        <ul className="hidden md:flex text-white gap-10">
            <li className="cursor-pointer">
                Home
            </li>

            <li className="cursor-pointer">
                About
            </li>
            <li className="cursor-pointer">
                Courses
            </li>

            <li className="cursor-pointer"> 
                Students

            </li> 
            <li className="cursor-pointer">
                Contact Us
                </li>  
        </ul>
        {/* Responsive menu */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#05051a] top-[92px] 
                ${toggle ? 'left-[0]' : 'left-[-100%]'} 
                `}>
            <li className="p-5 cursor-pointer">
                Home
            </li>

            <li className="p-5 cursor-pointer">
                About
            </li>
            <li className="p-5 cursor-pointer">
                Courses
            </li>

            <li className="p-5 cursor-pointer"> 
                Students

            </li> 
            <li className="p-5 cursor-pointer">
                Contact Us
                </li>  
        </ul>
        </div>
    </div>
)

}