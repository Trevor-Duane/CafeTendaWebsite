import React from 'react'
import Layout from '../../shared/layout/Layout'
import ExtraInformation from './components/moreInformation/ExtraInformation'
import QuickContact from './components/quickContacts/QuickContact'
import ReservationHero from './components/reservationHero/ReservationHero'

export default function Reservations() {
  return (
    <Layout>
        <ReservationHero/>
        <ExtraInformation/>
        <QuickContact/>
    </Layout>
  )
}
