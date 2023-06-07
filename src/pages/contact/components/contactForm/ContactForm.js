import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './contactForm.css';
import { IoChatbubbles } from 'react-icons/io5';
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <Container fluid className="contactFormFluid">
      <Container className="contactFormWrapper">
        <Container className="contactFormBox">
          <div className="contactFormContent row">
            <div className="col-sm-6 contactFormContentLeft">
                  <div>
                    <h5>Contact Us</h5>
                  </div>

                  <div className='contactInfo'>
                    <div className="contactRow">
                      <MdLocationPin size={24} color="#84449a"/>
                      <h6>Tenda House Bwebajja, Entebbe Road<br></br>Between Stabex and Tosha Petro Stations</h6>
                    </div>

                    <div className="contactRow">
                      <MdEmail size={24} color="#84449a"/>
                      <h6>info@tendacafe.com</h6>
                    </div>

                    <div className="contactRow">
                      <MdLocalPhone size={24} color="#84449a"/>
                      <h6>0770973650 | 0709715032</h6>
                    </div>
                  </div>

                  <div className="socialLinks">
                    <FaFacebook size={18} color="#84449a"/>
                    <FaInstagram size={18} color="#84449a"/>
                    <FaTwitter size={18} color="#84449a"/>
                    <FaLinkedin size={18} color="#84449a"/>
                  </div>
            </div>
            <div className="col-sm-6 contactFormContentRight">
                <div>
                  <h5>Contact Us</h5>
                </div>

                <div>
                  <form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="email" placeholder="your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </form>
                  
                </div>

            </div>
            
          </div>
        </Container>
      </Container>
    </Container>
  )
}

