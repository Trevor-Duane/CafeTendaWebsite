import React from 'react'
import Layout from '../../shared/layout/Layout'
import AboutHero from './components/aboutHero/AboutHero'
import OurStory from './components/ourStory/OurStory'

export default function About() {
  return (
    <Layout>
      <AboutHero/>
      <OurStory/>
    </Layout>
  )
}
