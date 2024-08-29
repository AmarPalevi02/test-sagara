import React from 'react'
import { navItems } from '../../contstans/navitems';
import { stylecutoms } from '../../contstans/styles';

const NavbarMobile = ({ active, togle, setActive }) => {
   return (
      <div className={`${togle ? "flex" : "hidden"} px-3 z-50 bg-primary fixed top-16 left-0  my-2 min-w-full  sidebar shadow-md`}>
         {togle ? (
            <div className='w-full relative flex flex-col justify-start bg-black-gradient p-6 rounded-xl '>
               <ul className="mt-[-6px]">
                  {navItems.map((item, i) => {
                     return (
                        <li
                           key={i}
                           className={`${active === item.name ? "text-secondary" : "text-secondary-dark"} mb-3 font-semibold `}
                           onClick={(() => setActive(item.name))}
                        >
                           <a href={`#${item.path}`}>
                              {item.name}
                           </a>
                        </li>
                     )
                  })}
               </ul>
               <button className={`${stylecutoms.buutonstyle} px-9 py-2.5 w-full  md:hidden text-sm`}>
                  SIGN IN
               </button>
            </div>
         ) : (
            ""
         )}
      </div>
   )
}

export default NavbarMobile