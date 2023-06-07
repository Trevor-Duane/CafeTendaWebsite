import React from 'react'
import Layout from '../../shared/layout/Layout'
import CareersHero from './components/careersHero/CareersHero'
import CareersSection from './components/careersSection/CareersSection'

export default function Careers() {
  return (
    <Layout>
        <CareersHero/>
        <CareersSection/>
    </Layout>
  )
}
