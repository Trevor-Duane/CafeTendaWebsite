import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Col, Container, Row, Image } from 'react-bootstrap';
import './footer.css'

export default function Footer() {
  return (
    <Container fluid className="footerSection m-0 p-0">
    <Container className='footerContainer px-4'>
            <div className="firstGrid">
              <div>
                <h5>Cafe Tenda Restaurant & Lounge</h5>
                <p>Cafe Tenda Restaurant and Lounge is Lorem Officia aute minim quis mollit officia. Laborum proident aliquip nisi in ea esse consectetur. Magna cillum ut labore ea mollit officia Lorem. Dolor excepteur consequat officia aute sunt dolor enim duis ut veniam consequat duis adipisicing esse.</p>
              </div>
              <div className="socialLinks">
                <FaFacebook size={18} color="#84449a"/>
                <FaInstagram size={18} color="#84449a"/>
                <FaTwitter size={18} color="#84449a"/>
                <FaWhatsapp size={18} color="#84449a"/>
              </div>
            </div>

            <div className="secondGrid">
              <div>
                <h5>Useful Links</h5>
              </div>

              <div>
                <ul>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Offers</li>
                  <li>Site Map</li>
                  <li>Home Deliveries</li>
                  <li>Hotel & Suites</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>

            <div className="thirdGrid">
              <div>
                <h5>Contact Us</h5>
              </div>
              <div className="thirdGridLocation">
                  <span>Location</span>
                  <p>Located on Tenda House, 1<sup>st</sup> Floor, Between Stabex and Tosha Petro Station</p>
              </div>

              <div className="thirdGridPhones">
                  <span>Phone</span>
                  <p>0770973650</p>
                  <p>07097150322</p>
              </div>

              <div className="thirdGridEmail">
                  <span>Email</span>
                  <p>info@tendacafe.com</p>
              </div>
            </div>
    </Container>
    <Container fluid className="bottomFooter">
      <p className="copyRightText"><span>&copy;</span>2021-2023 Tenda Africa Ltd. All Rights Reserved</p>
    </Container>
</Container>
  )
}
