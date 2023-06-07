import React from 'react'
import { Container } from 'react-bootstrap'
import './careersSection.css'

export default function CareersSection() {
  return (
    <Container fluid className="careersSectionFluid">
        <Container className="careersSectionWrapper">
            <div className="careerSectionContent">
                <p>
                    Currently No Open Positions
                </p>
            </div>
        </Container>
    </Container>
  )
}
