import React from 'react'
import { Container } from 'react-bootstrap'
import './eventsSpecial.css'

export default function EventsSpecial() {
  return (
    <Container fluid className="eventsSpecialFluid">
        <Container className="eventsSpecialWrapper">
            <div className="eventsSpecialHeader">
                <h5>Catering and Private Events</h5>
                <p>Allow us cater the best foods for your Special occassion. </p>
            </div>

            <div className="specialEvents">
                <div className="eventGrid1">
                    <h5>Corporate Breakfast</h5>
                </div>

                <div className="eventGrid2">
                    <h5>Birthday Parties</h5>
                </div>

                <div className="eventGrid3">
                    <h5>Graduations</h5>
                </div>

                <div className="eventGrid4">
                    <h5>Bridal Showers</h5>
                </div>

                <div className="eventGrid5">
                    <h5>Baby Showers</h5>
                </div>

                <div className="eventGrid6">
                    <h5>Get Togethers & Pizza Parties</h5>
                </div>
            </div>
        </Container>
    </Container>
  )
}
