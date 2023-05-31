import React from 'react'
import { Container } from 'react-bootstrap'
import './eventsOffers.css'

export default function EventOffers() {
  return (
    <Container fluid className="eventOfferFluid">
        <Container className="eventOfferWrapper">
            <div className="eventOfferContent col-sm-12">
                <h5>Catering & Events Special Offers</h5>
                <p>Cafe Tenda Restaurant provides a few special offers for all events reserved, some of the offers include</p>
                <ul>
                    <li>Free Venue</li>
                    <li>Free Music</li>
                    <li>Free Decor</li>
                    {/* <li>Access to all Amenities</li> */}
                </ul>
            </div>
        </Container>
    </Container>
  )
}
