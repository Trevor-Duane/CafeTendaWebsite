import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa';
import './contactHero.css';

export default function ContactHero() {
  return (
    <Container fluid className="contactFluid p-0">
        <Container fluid className="contactHeroFluid">
            <Container className="contactHeroWrapper">
                <div className="contactHeroHead">
                    <h5>Tenda House<br></br>Home of Cafe Tenda</h5>
                    <p>Located between Stabex and Tosha Petro Stations, Bwebajja along Entebbe Road</p>
                </div>
                <div className="contactHeroButtonWrapper">
                    <Button className="contactHeroButton">
                        <FaLocationArrow size={18} color="#fff"/>
                        <span>Locate Us</span>
                    </Button>
                </div>
            </Container>
        </Container>
    </Container>
  )
}
