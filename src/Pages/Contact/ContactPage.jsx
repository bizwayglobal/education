import React from 'react'
import Navbar from './Components/Navbar'
import ContactHeader from './Components/Header'
import Contact from './Components/ContactSection'
import Footer from '../Home/Components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage