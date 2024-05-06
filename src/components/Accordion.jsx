import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

  return ( 
      <div className='flex flex-col bg-[rgb(13,5,26)]'>
          
          <AccordionLayout 
            title="What is Pen Programmer?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
          </AccordionLayout>
      

          
          <AccordionLayout 
            title="How do I enroll in a course in Pen Programmer?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p className='lex w-[82%] justify-between text-white bg-[rgba(242,242,243,0.2)] ml-[9%]  border-black-50  p-3 rounded-md' style={{marginTop:"-15px"}}>Enrolling in a course at Pen Programmer is simple. Just visit our website, browse through the course catalog, and select the course that interests you. Click on the 'Enroll Now' button, and you'll be guided through the enrollment process. Once enrolled, you'll have immediate access to the course content</p>   
          </AccordionLayout>
          
         
          <AccordionLayout 
            title="Are the course self-paced or scheduled?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p className='lex w-[82%] justify-between text-white bg-[rgba(242,242,243,0.2)] ml-[9%]  border-black-50  p-3 rounded-md' style={{marginTop:"-15px"}}>All our courses are self-paced, allowing you to learn at your convenience. You can access the course materials anytime, anywhere, and progress through the content at a pace that suits you best. There are no fixed schedules, so you can balance learning with other commitments.

</p>  
          </AccordionLayout>
          
      </div>
  );
};
export default Accordion;