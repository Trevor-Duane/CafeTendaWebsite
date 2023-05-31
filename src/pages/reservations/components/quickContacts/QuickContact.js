import React from 'react';
import { Container } from 'react-bootstrap';
import './quickContact.css';

export default function QuickContact() {
  return (
    <Container fluid className="quickContactFluid">
        <Container className="quickContactWrapper">
            <div className="quickContactText">
                <div>
                    <h5>Quickly Reach Us</h5>
                    <p>for quick and simple inquiries or reservations</p>
                </div>
            </div>

           <div className="quickContacts col-sm-6">
            <div className="text-center">
              <h5>Whatsapp Contact</h5>
              <p>+256 770973650</p>
            </div>
            <div className="text-center">
              <h5>Email</h5>
              <p>info@tendacafe.com</p>
            </div>
           </div>
        </Container>
    </Container>
  )
}
