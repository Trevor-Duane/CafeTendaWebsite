import React from 'react';
import { Container } from 'react-bootstrap';
import './extrainfo.css'

export default function ExtraInformation() {
  return (
    <Container fluid className="extraInfoFluid">
        <Container className="extraInfoWrapper">
            <div className="extraInfoHead">
                <h5>Checkout Our Suites</h5>
                <p>Tenda Suites bed and breakfast reimagined just for the stylish traveller, <a href='https://www.tendasuites.com'>more about tenda suites</a></p>
            </div>

            <div className="suitesSection">
              <div className="suites1"></div>
              <div className="suites2"></div>
              <div className="suites3"></div>
            </div>

        </Container>
    </Container>
  )
}
