import React from 'react'
import Layout from '../../shared/layout/Layout'
import ContactForm from './components/contactForm/ContactForm'
import ContactHero from './components/contactHero/ContactHero'
import MapsSection from './components/mapsSection/MapsSection'

export default function Contact() {
  return (
    <Layout>
      <ContactHero/>
      <ContactForm/>
      <MapsSection/>
    </Layout>
  )
}
