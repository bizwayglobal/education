import React from 'react'
import Navbar from './Components/Navbar'
import AboutUsHeader from './Components/Header'
import Service from '../Home/Components/Service'

import Footer from '../Home/Components/Footer'
import AboutSection from './Components/AboutSection'
import RecentEvents from './Components/Events'
const AboutPage = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <AboutUsHeader/>
            <Service/>
            <AboutSection/>
            <RecentEvents/>
            <Footer/>
        </div>
    </div>
  )
}

export default AboutPage