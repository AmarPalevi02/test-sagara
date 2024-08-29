import React from 'react'

import { items } from '../../contstans/items'
import { aboutus } from '../../assets'

const DescriptionAbout = () => {
   return (
      <div className='px-2 mt-9 md:flex md:justify-between md:items-center md:gap-14 md:px-32 md:mt-28'>
         <div className=" ">
            <h1 className='text-2xl font-bold text-center text-secondary md:text-4xl md:text-start'>WHY SAGARA IT CERTIFICATION?  </h1>
            <div className="mt-5">
               {items.map((item, i) => {
                  return (
                     <div key={i} className='flex items-center justify-center mb-5 md:mb-9'>
                        <div className="flex items-center gap-2">
                           <img className='w-[60px] h-[60px]' src={item.icon} alt={item.icon} />
                           <div className="">
                              <h3 className='font-semibold text-xl text-secondary'>{item.title}</h3>
                              <p className='line-clamp-2 leading-normal md:text-sm'>{item.des}</p>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className="">
            <img src={aboutus} alt={aboutus} />
         </div>
      </div>
   )
}

export default DescriptionAbout