import React from 'react'
import { logoFooter } from '../assets'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
   return (
      <footer className='absolute w-full bg-dark px-2 py-4 mt-20 md:pt-16 md:pb-5 md:px-32'>
         <div className="md:flex md:justify-between md:w-full">
            <div className="">
               <img src={logoFooter} alt="" />
               <p className='text-[#DDDDDD] max-w-[350px] text-sm font-normal my-4'>Plan, build, grow digital products. Continuously delivering impact.</p>
               <div className="flex text-[#DDDDDD] gap-2 mb-4 md:gap-3">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
               </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-10">
               <div className="text-[#DDDDDD] my-2">
                  <p className='font-bold text-[#DDDDDD] mb-2'>Pages</p>
                  <p className='text-sm mb-1'>IT Certification</p>
                  <p className='text-sm mb-1'>Careers</p>
                  <p className='text-sm mb-1'>FAQ</p>
                  <p className='text-sm mb-1'>Terms & Condition</p>
               </div>
               <div className="text-[#DDDDDD] my-2">
                  <p className='font-bold text-[#DDDDDD] mb-2'>Careers</p>
                  <p className='text-sm mb-1'>Front End Developer</p>
                  <p className='text-sm mb-1'>Back End Developer</p>
                  <p className='text-sm mb-1'>Quality Assurance</p>
                  <p className='text-sm mb-1'>UI/UX Design</p>
               </div>
               <div className="text-[#DDDDDD] my-2">
                  <p className='font-bold text-[#DDDDDD] mb-2'>Contact</p>
                  <p className='flex items-center gap-2 text-sm mb-1'><FaPhone />+62 856-4097-7356</p>
                  <p className='flex items-center gap-2 text-sm mb-1'><MdEmail />consult@sagara.asia</p>
                  <p className='flex items-center gap-2 text-sm mb-1 md:max-w-[201px]'><FaLocationDot />South Jakarta and Bandung, Indonesia</p>
               </div>
            </div>
         </div>

         <p className='text-[#DDDDDD] text-sm text-center mt-4'> Copyright &copy; 2024 PT. Sagara Asia Teknologi</p>
      </footer>
   )
}

export default Footer