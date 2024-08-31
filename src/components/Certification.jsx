import React from 'react'
import { certifications } from '../contstans/items'
import { register } from '../assets'

const Certification = () => {
   return (
      <div className=' md:px-32 md:gap-14'>
         <div className="text-center mt-12 mb-5">
            <h1 className='font-semibold text-xl text-secondary'>How Sagara</h1>
            <h1 className='font-bold text-2xl text-secondary'>IT-Certification Works</h1>
         </div>
         <div className='flex flex-col justify-center items-center md:flex-row-reverse'>
            <div className="flex flex-col  justify-start px-2">
               {certifications.map((item, i) => (
                  <div className="flex gap-2">
                     <div key={item.id} className="relative flex items-center">
                        {i !== 0 && (
                           <div className="absolute top-0 left-6 h-1/2 border-l-2 border-dashed border-red-600 z-0"></div>
                        )}
                        <div className="relative w-12 h-12 flex justify-center items-center text-center rounded-full shadow-md z-10 bg-white mb-9 md:mb-12">
                           <h1 className="text-secondary text-2xl z-10">{item.icon}</h1>
                        </div>
                        {i !== 4 && (
                           <div className="absolute bottom-0 left-6 h-1/2 border-l-2 border-dashed border-red-600 z-0"></div>
                        )}
                     </div>

                     <div className="flex flex-col">
                        <div className="flex gap-2 mb-1">
                           <h1 className='text-lg font-semibold text-secondary'>{item.hastag}</h1>
                           <h1 className='text-lg font-semibold'>{item.title}</h1>
                        </div>

                        <div className="text-start">
                           <p className='text-start text-sm text-secondary-dark line-clamp-2'>{item.des}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <img className='md:w-[523px] md:h-[560px]' src={register} alt="" />
         </div>
      </div>
   )
}

export default Certification