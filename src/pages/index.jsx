import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const LandingPage = () => {
   return (
      <div>
         <Navbar />
         <div className="mt-16">
            <Hero />
            <About />
         </div>
      </div>
   )
}

export default LandingPage