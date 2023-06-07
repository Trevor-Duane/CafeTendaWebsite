import React from 'react';
import { Container } from 'react-bootstrap';
import './mapsSection.css'

export default function MapsSection() {
  return (
    <Container fluid className="mapSectionFluid p-0 m-0">
        <Container fluid className="mapSectionWrapper p-0 m-0">
            <div className="mapSectionContent">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7976979488953!2d32.53584517279614!3d0.184217464217925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d91dda6ba6b13%3A0x335666e760bc1bd7!2sCafe%20Tenda!5e0!3m2!1sen!2sug!4v1685601928333!5m2!1sen!2sug" width="100%" height="450" title="Cafe Tenda Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Container>
    </Container>
  )
}
