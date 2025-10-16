import React from 'react'
import CoursesHeader from './Components/Header'
import Navbar from './Components/Navbar'
import Categories from '../Course/Components/Programs'
import Course from '../Home/Components/UpcomingEvents'
import Testimonial from '../Home/Components/Testimonial'
import Footer from '../Home/Components/Footer'

const CoursePage = () => {
  return (
    <div>
        <Navbar/>
        <CoursesHeader/>
        <Categories/>
        <Course/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default CoursePage