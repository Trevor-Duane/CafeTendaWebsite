import React from 'react'
import { Container } from 'react-bootstrap';
import { FaHandHoldingHeart, FaRegEye } from 'react-icons/fa';
import { GiBullseye } from "react-icons/gi";
import './aboutHero.css';

export default function AboutHero() {
  return (
    <Container fluid className="aboutHeroFluid p-0">
        <Container fluid className="aboutHeroWrapper">
            <Container className="aboutHeroContent">
                <div className="aboutProfile">

                    <div className='col-sm-4 d-flex flex-column align-items-center aboutProfileLeft'>
                        <div className="aboutProfileIcon">
                            <FaRegEye size={38} color="#84449a"/>
                        </div>
                        <div className="aboutProfileDefinition">
                            <h5>Vision</h5>
                            <p>To pursuit excellence, and commitment to establishing Cafe Tenda as the most outstanding quality restaurant brand in uganda and beyond</p>
                        </div>
                        
                    </div>

                    <div className='col-sm-4 d-flex flex-column align-items-center aboutProfileCenter'>
                        <div className="aboutProfileIcon">
                            <GiBullseye size={42} color="#84449a"/>
                        </div>
                        <div className="aboutProfileDefinition">
                            <h5>Mission</h5>
                            <p>To delight and nourish our customers with quality delicious food and excellent service at reasonable price </p>
                        </div>
                        
                    </div>

                    <div className='col-sm-4 d-flex flex-column align-items-center aboutProfileRight'>
                        <div className="aboutProfileIcon">
                            <FaHandHoldingHeart size={42} color="#84449a"/>
                        </div>
                        <div className="aboutProfileDefinition">
                            <h5>Values</h5>
                            <ul>
                                <li>Team Work</li>
                                <li>Integrity</li>
                                <li>Quality Food</li>
                                <li>Welcoming Presence</li>
                                <li>Attentive & Friendly Service</li>
                            </ul>
                        </div>
                        
                    </div>

                   
                </div>
            </Container>
        </Container>
    </Container>
  )
}
