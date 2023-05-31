import React from 'react'
import Layout from '../../shared/layout/Layout'
import EventsHero from './components/eventsHero/EventsHero'
import EventOffers from './components/eventsOffers/EventOffers'
import EventsSpecial from './components/eventsSpecial/EventsSpecial'

export default function CateringEvents() {
  return (
    <Layout>
        <EventsHero/>
        <EventsSpecial/>
        <EventOffers/>
    </Layout>
  )
}
