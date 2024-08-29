import React from 'react'

import { hero } from '../assets'
import { stylecutoms } from '../contstans/styles'

const Hero = () => {
   return (
      <div className='relative justify-center items-center'>
         <img src={hero} alt="" />
         <div className="absolute top-0">
            <div className="flex flex-col justify-center px-2 mt-4 h-auto md:px-32 md:py-20">
               <h1 className='text-2xl text-primary font-semibold md:text-6xl'>Live Your Best Life</h1>
               <h1 className='text-2xl text-primary font-semibold md:text-6xl'>Using Your Strengths</h1>
               <p className='max-w-[500px] text-secondary-dark text-base font-normal mt-4 mb-5 md:leading-7 md:text-primary md:mt-4 md:mb-16'>Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else</p>
               <button className={`${stylecutoms.buutonstyle} w-full text-base py-4 px-16 text-primary md:w-72`}>Get Certification</button>
            </div>
         </div>
      </div>
   )
}

export default Hero