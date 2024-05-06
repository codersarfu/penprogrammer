import React from 'react'
//import CourseDatas from  '../assets/img/DevelopmentPhoto.webp';

export default function Courses() {
    const CourseData=[
        {
            id:1,
            header: "Full Stack Web Development Course",
            content: "Join Pen Programmer's Full Stack Web course to design the look (front-end) and the brain (back-end) of websites. From colors to coding, you'll create awesome online experiences that impress.",
            btn: "Get Started",
            imgsrc: require("../assets/img/CoursePhoto.webp"),
        },
        {
            id:2,
            header: "App Development",
            content: "Build complete apps from scratch! Learn both front-end (how it looks) and back-end (how it works) development with Pen Programmer's Full Stack App course. Perfect for beginners and pros, you'll make user-friendly apps that connect to databases and servers.",
            btn: "Coming Soon",
            imgsrc: require("../assets/img/DevelopmentPhoto.webp"),
        },
        {
            id:3,
            header: "Graphics Designing",
            content: "Create cool visuals! Pen Programmer's Graphics Design course helps you use tools like Adobe Photoshop and Illustrator to make stunning designs. Design logos, pictures, and more for websites and ads.",
            btn: "Coming Soon",
            imgsrc: require("../assets/img/DevelopmentPhoto.webp"),
        },
        {
            id:4,
            header: "Computer Basics",
            content: "Start your tech journey! Pen Programmer's Computer Basics course teaches you essential stuff about computers. Learn about parts, files, and how things work in the digital world.",
            btn: "Coming Soon",
            imgsrc: require("../assets/img/DevelopmentPhoto.webp"),
        },
    ]
  return (
    <div className="bg-[rgb(13,5,26)] pb-1">
     <h1 className="text-center pt-10 text-white font-bold text-5xl mb-20"> Courses We Provide</h1>
    {
        CourseData.map((course,i)=>{
           return(
            <div className="max-w-[1240px] bg-[rgba(242,242,243,0.2)] rounded-2xl pt-3 pb-3 mx-auto my-10 md:grid grid-cols-3" style={{marginTop:"-20px"}}>
            <div className="col-span-1 md:w-[80%] text-center">
                <img  src={course.imgsrc} alt="" className="ml-2 rounded-xl " key={i}/>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <h1 className="text-[rgb(0,128,122)] font-bold my-2 ml-3 text-3xl">{course.header}</h1>
                <p className="my-2 ml-3 mr-3 text-white text-justify">
                {course.content}
                </p>
                <button className="w-[30%] ml-3 bg-black border-green-600 text-white p-3 rounded-3xl">{course.btn}</button>
            </div>
        </div>
           )
        })
    }
    
     </div>
  )
} 