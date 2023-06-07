import React from 'react'
import dining from '../../../../assets/images/dining-table.png'
import motor from '../../../../assets/images/motorbike.png'
import takea from '../../../../assets/images/take-away.png'
import './ordertype.css'
import { Container } from 'react-bootstrap'

export default function OrderType() {
  return (
    <Container fluid className="orderTypeFluid">
        <Container className="orderTypeWrapper">
          <div className="orderTypesHead">
            <h5>Cafe Tenda Services</h5>
            <p>Always something for everyone</p>
          </div>

          <div className="orderTypeContent">
              <div className="orderTypeCard">
                <div>
                  <img src={motor} className="img-fluid" height="200" width="200" alt="orderTypeIcon"/>
                </div>
                <div>
                  <h5>Delivery Order</h5>
                </div>
                <div>
                  <p>Order from the comfort of your home and delivery team will bring it your doorstep</p>
                </div>
              </div>

              <div className="orderTypeCard">
                <div>
                  <img src={takea} className="img-fluid" height="200" width="200" alt="orderTypeIcon"/>
                </div>
                <div>
                  <h5>TakeAway Order</h5>
                </div>
                <div>
                  <p>Order from anywhere and eat from anywhere you want</p>
                </div>
              </div>

              <div className="orderTypeCard">
                <div>
                  <img src={dining} className="img-fluid" height="200" width="200" alt="orderTypeIcon"/>
                </div>
                <div>
                  <h5>DineIn Order</h5>
                </div>
                <div>
                  <p>Fast and simple, order from anywhere and just arrive to serve </p>
                </div>
              </div>
          </div>
        </Container>
    </Container>
  )
}
