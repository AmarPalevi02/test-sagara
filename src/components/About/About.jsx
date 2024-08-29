import React from 'react'

const About = () => {
   return (
      <div className='pt-80 flex flex-col items-center justify-center md:flex md:flex-row md:py-0 md:gap-14 md:mt-20 md:px-32'>
         <div className="flex items-center md:w-full md:justify-between">
            <h1 className='text-center font-semibold bordder md:text-2xl'>ABOUT US</h1>
            <div className="px-2 hidden md:block">
               <h2 className='mt-2 font-semibold text-secondary  md:text-left md:text-lg'>SAGARA IT CERTIFICATION </h2>
               <div className='font-extrabold my-2 md:my-4 md:text-2xl '>
                  <h1 className='text-4xl'><span className='text-secondary'>Join thousands</span> <span className='bg-gradient-to-r from-[#000] via-[#A51535] to-[#A51535] bg-clip-text text-transparent'>of professionals who have</span></h1>
                  <h1 className='text-4xl'> elevated their skills <span className='bg-gradient-to-r from-[#000] via-[#A51535] to-[#A51535] bg-clip-text text-transparent'>and carved out success in</span></h1>
                  <h1 className='text-4xl'>the technology industry. <span className='bg-gradient-to-r from-[#000] via-[#A51535] to-[#A51535] bg-clip-text text-transparent'>Start your journey to</span></h1>
                  <h1 className='text-4xl'>excellence with us today!</h1>
               </div>
               <p className='text-base text-secondary-dark '>Boost your career prospects in the digital era with industry-recognized</p>
               <p className='text-base text-secondary-dark '>information technology certifications from Sagara IT Certification.</p>
            </div>
         </div>

         <div className="px-2 block md:hidden">
            <h2 className='mt-2 font-semibold text-secondary text-center md:text-left md:text-lg'>SAGARA IT CERTIFICATION </h2>
            <h1 className='text-xl font-extrabold my-2 md:my-4 max-w-[612px] md:text-2xl mx-auto '>
               <span className='text-secondary'>Join thousands</span> <span className='bg-gradient-to-r from-[#000] via-[#A51535] to-[#A51535] bg-clip-text text-transparent'>of professionals who have</span>
               elevated their skills <span className='bg-gradient-to-r from-[#000] via-[#A51535] to-[#A51535] bg-clip-text text-transparent'>and carved out success in</span>
               the technology industry. Start your journey to
               excellence with us today!
            </h1>
            <p className='text-base text-secondary-dark  md:max-w-[612px]'>Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification.</p>
         </div>
      </div>
   )
}

export default About