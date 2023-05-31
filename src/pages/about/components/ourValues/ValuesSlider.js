import React from 'react'
import { Container } from 'react-bootstrap'
import './values.css'

export default function ValuesSlider() {
  return (
    <Container fluid className="valuesSliderFluid">
        <Container className="valuesSliderWrapper">
            <div className="valueHead">
                <h5>Our Values</h5>
                <p>This is what makes us unique</p>
            </div>
            <div className="valuesSliderContainer">
                <div className="sliderValue1">
                    <h5>Team Work</h5>
                    <p>
                        We have one common goal to serve our clients in the most effective & efficient way
                    </p>
                </div>

                <div className="sliderValue2">
                    <h5>Integrity</h5>
                    <p>
                        We are honest & consistent in quality of products we offer at a fair value, along with excellence in standards of service
                    </p>
                </div>

                <div className="sliderValue3">
                    <h5>Attentive & Friendly Service</h5>
                    <p>
                        We listen, we build on your feedback to serve you better
                    </p>
                </div>

                <div className="sliderValue4">
                    <h5>Welcoming Presence</h5>
                    <p>
                        We provide an ambiance with a family - friendly dinning experience
                    </p>
                </div>

                <div className="sliderValue5">
                    <h5>Quality Food</h5>
                    <p>
                        We tailor quality food that is in harmony with our guest expectations and experience
                    </p>
                </div>

            </div>
        </Container>
    </Container>
  )
}
