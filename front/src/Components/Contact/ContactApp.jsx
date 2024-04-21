import React from 'react'
import './ContactApp.css'
import SupportSection from './SupportSection'
import FAQ from './FAQ'
import ContactForm from './ContactForm'
import SocialMediaArticles from './SocialMediaArticles'

const ContactApp = () => {
  return (
    <div className='containersrs'>
      <SupportSection/>
      <FAQ/>
      <ContactForm/>
      <SocialMediaArticles/>
      <footer className='footer1'>
        <p>&copy; Yaatrii.Com</p>
      </footer>
    </div>
  )
}

export default ContactApp
