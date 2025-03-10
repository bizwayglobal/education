import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousal'
import Service from './Components/Service'
import AboutUs from './Components/About'
import Categories from './Components/Categories'
import UpcomingEvents from './Components/UpcomingEvents'
import TestimonialSection from './Components/Testimonial'
import Footer from './Components/Footer'
import RecentEvents from './Components/RecentEvents'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Service/>
        <AboutUs/>
        <Categories/>
        <UpcomingEvents/>
        <TestimonialSection/>
        <RecentEvents/>
        <Footer/>
    </div>
  )
}

export default HomePage