import React from 'react'
import { Container } from 'react-bootstrap'
import './careerHero.css'

export default function CareersHero() {
  return (
    <Container fluid className="p-0 m-0">
        <Container fluid className="careersHeroFluid">
            <Container className="careersHeroWrapper">
                <div className="careersHeroText">
                    <h2>Cafe Tenda Restaurant and Lounge</h2>
                    <h5>Careers</h5>
                    <p>A team with a common goal to serve customers in the most effective and efficeint way, with quality delicious food and excellent service</p>
                </div>
            </Container>
        </Container>
    </Container>
  )
}
