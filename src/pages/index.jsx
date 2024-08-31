import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import About from '../components/About/About'
import DescriptionAbout from '../components/About/DescriptionAbout'
import Certification from '../components/Certification'
import ListCertification from '../components/ListCertification'

const LandingPage = () => {
   return (
      <div>
         <Navbar />
         <div className="mt-16">
            <Hero />
            <About />
            <DescriptionAbout />
            <Certification />
            <ListCertification />
         </div>
      </div>
   )
}

export default LandingPage