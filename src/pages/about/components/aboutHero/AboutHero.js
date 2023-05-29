import React from 'react'
import { Container } from 'react-bootstrap';
import { GiStairsGoal } from "react-icons/gi";
import './aboutHero.css';

export default function AboutHero() {
  return (
    <Container fluid className="aboutHeroFluid p-0">
        <Container fluid className="aboutHeroWrapper">
            <Container className="aboutHeroContent">
                <div className="aboutProfile">
                    <div className='col-sm-6 d-flex flex-column align-items-center aboutProfileLeft'>
                        {/* <GiStairsGoal size={42} color="#fff"/> */}
                        <h5>Our Mission</h5>
                        <p>Est officia irure deserunt consequat sit. Aliqua Lorem sit pariatur aute enim velit eu nisi. Labore incididunt ipsum fugiat pariatur minim deserunt officia sunt fugiat. Ad reprehenderit nulla voluptate officia consequat eu irure aliquip.</p>
                    </div>

                    <div className='col-sm-6 d-flex flex-column align-items-center aboutProfileRight'>
                        {/* <GiStairsGoal size={42} color="#fff"/> */}
                        <h5>Our Values</h5>
                        <p>Est officia irure deserunt consequat sit. Aliqua Lorem sit pariatur aute enim velit eu nisi. Labore incididunt ipsum fugiat pariatur minim deserunt officia sunt fugiat. Ad reprehenderit nulla voluptate officia consequat eu irure aliquip.</p>
                    </div>
                </div>
            </Container>
        </Container>
    </Container>
  )
}
