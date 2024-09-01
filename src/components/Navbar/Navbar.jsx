import React, { useState } from 'react'
import { logo } from '../../assets'
import { navItems } from '../../contstans/navitems';
import { stylecutoms } from '../../contstans/styles'

import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import NavbarMobile from './NavbarMobile';

const Navbar = () => {
   const [togle, setTogle] = useState(false)
   const [active, setActive] = useState('IT CERTIFICATION')

   return (
      <nav className='w-full bg-primary py-4 px-8 fixed top-0 z-50'>
         <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center ">
               <img src={logo} alt="logo" />
               <div className="hidden md:block">
                  <ul className='flex items-center gap-8 ml-12'>
                     {navItems.map((item, i) => (
                        <li
                           key={i}
                           className={`${active === item.name ? "text-secondary" : "text-secondary-dark"} font-semibold `}
                           onClick={() => setActive(item.name)}
                        >
                           <a href={`#${item.path}`}>{item.name}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="md:hidden">
               {togle ? (
                  <IoCloseSharp onClick={() => setTogle(!togle)} className='text-2xl font-bold' />
               ) : (
                  < RxHamburgerMenu onClick={() => setTogle(!togle)} className='text-2xl font-bold' />
               )}
            </div>

            <NavbarMobile togle={togle} active={active} setActive={setActive} />

            <button className={`${stylecutoms.buutonstyle} px-9 py-2.5 hidden md:block`}>
               SIGN IN
            </button>
         </div>
      </nav>
   )
}

export default Navbar