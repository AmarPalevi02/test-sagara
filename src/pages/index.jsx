import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import About from '../components/About/About'
import DescriptionAbout from '../components/About/DescriptionAbout'
import Certification from '../components/Certification'
import ListCertification from '../components/ListCertification'
import Footer from '../components/Footer'

const LandingPage = () => {
   return (
      <div className='min-h-screen'>
         <Navbar />
         <div className="mt-16">
            <Hero />
            <About />
            <DescriptionAbout />
            <Certification />
            <ListCertification />
            <div className=''>
               <Footer />
            </div>
         </div>
      </div>
   )
}

export default LandingPage