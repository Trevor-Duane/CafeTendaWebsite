import React from 'react'
import Layout from '../../shared/layout/Layout'
import HeroSection from './components/heroSection/HeroSection'
import OrderType from './components/orderTypes/OrderType'

export default function OnlineOrdering() {
  return (
    <Layout>
        <HeroSection/>
        <OrderType/>
    </Layout>
  )
}
