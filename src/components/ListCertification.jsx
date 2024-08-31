import React, { useState } from 'react'
import { listCertifications } from '../contstans/items'

import { thumbnail } from '../assets'
import { viewCertifications } from '../contstans/items'
import { stylecutoms } from '../contstans/styles'

const ListCertification = () => {
   const [btnActive, setBtnActive] = useState('Front END Developer')

   return (
      <div className='md:px-32'>
         <div className="mt-12 mb-10">
            <h1 className='text-xl text-secondary font-semibold text-center'>Empower Yourself with</h1>
            <h2 className='text-2xl text-secondary font-bold text-center'>Our Certification</h2>
         </div>
         <div className="ml-2">
            <nav className='flex justify-center gap-4 overflow-auto scroll-hidden'>
               {listCertifications.map((item, i) => (
                  <ul className='' key={i}>
                     <li
                        className={`w-48 text-center py-3 rounded-md cursor-pointer text-sm ${btnActive === item.list ? 'bg-secondary text-white font-semibold' : 'border-2'}`}
                        onClick={() => setBtnActive(item.list)}
                     >
                        {item.list}
                     </li>
                  </ul>
               ))}
            </nav>
         </div>

         <div className="md:flex md:justify-center md:items-center md:gap-10 md:mt-11">
            <div className="md:w-[558px]">
               <img
                  className='object-cover'
                  src={thumbnail}
                  alt={thumbnail}
               />
            </div>

            <div className="">
               {viewCertifications.map((item, i) => (
                  <div className='' key={i}>
                     <h1 className='text-center text-2xl font-bold text-secondary mb-4 md:text-start md:text-4xl'>{item.frontend.title}</h1>
                     <div className="flex px-2 gap-2 items-center mb-5">
                        <img
                           className='w-10 h-10'
                           src={item.frontend.description1.icon}
                           alt=""
                        />
                        <p className='line-clamp-2 text-secondary-dark text-sm'>{item.frontend.description1.des}</p>
                     </div>
                     <div className="flex px-2 gap-2 items-center mb-5">
                        <img
                           className='w-10 h-10'
                           src={item.frontend.description2.icon}
                           alt=""
                        />
                        <p className='line-clamp-2 text-secondary-dark text-sm'>{item.frontend.description2.des}</p>
                     </div>
                     <div className="flex px-2 gap-2 items-center mb-5">
                        <img
                           className='w-10 h-10'
                           src={item.frontend.description3.icon}
                           alt=""
                        />
                        <p className='line-clamp-2 text-secondary-dark text-sm'>{item.frontend.description3.des}</p>
                     </div>

                     <div className="flex justify-center items-center">
                        <button className={`${stylecutoms.buutonstyle} w-full text-base py-3 px-16 text-primary md:w-72 `}>Get Detail</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ListCertification