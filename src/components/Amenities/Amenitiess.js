import React from 'react'
import motorbike from '../../assets/icons/motorbike.png'
import party from '../../assets/icons/party.png'
import payment from '../../assets/icons/payment-method.png'
import takeaway from '../../assets/icons/take-away.png'
import wifi from '../../assets/icons/wifi.png'
import { Container, Image } from 'react-bootstrap'
import './amenities.css'

export default function Amenities() {
  return (
    <Container fluid className="amenitiesWrapper">
        <Container>
            <div className="amenitiesHeader">
                <h5>Amenities</h5>
                <p>Offering the best customer experience</p>
            </div>

            <div className="amenitiesContainer">
              <div className="amenityContainer">
                <div>
                  <Image className="img-fluid amenityIcon" src={wifi} alt="wifi icon"/>
                </div>
                <div>
                  <h6>Fast WiFi</h6>
                </div>
              </div>

              <div className="amenityContainer">
                <div>
                  <Image className="img-fluid amenityIcon" src={motorbike} alt="wifi icon"/>
                </div>
                <div>
                 <h6>Home Delivery</h6>
                </div>
              </div>

              <div className="amenityContainer">
                <div>
                  <Image className="img-fluid amenityIcon" src={takeaway} alt="wifi icon"/>
                </div>
                <div>
                  <h6>Take Away</h6>
                </div>
              </div>

              <div className="amenityContainer">
                <div>
                  <Image className="img-fluid amenityIcon" src={payment} alt="wifi icon"/>
                </div>
                <div>
                  <h6>Multiple Payment Methods</h6>
                </div>
              </div>

              <div className="amenityContainer">
                <div>
                  <Image className="img-fluid amenityIcon" src={party} alt="wifi icon"/>
                </div>
                <div>
                  <h6>Party Orders</h6>
                </div>
              </div>
            </div>
        </Container>
    </Container>
  )
}
