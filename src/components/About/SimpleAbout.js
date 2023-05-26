import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import bar2 from '../../assets/images/bar2.JPG'
import outside from '../../assets/images/outside.jpg'

import './about.css';

export default function SimpleAbout() {
  return (
    <Container fluid className="simpleAbout">
        <Container>
                <div className='simpleAboutHead'>
                    <h5>About Us</h5>
                    <p>Simple is better</p>
                </div>

                <Row className="aboutRow">
                    <Col className="aboutCol1" xs={12} sm={12} md={6}>
                        <p>
                            Labore non laborum duis dolore aliquip dolor quis labore est occaecat irure tempor mollit. Id eiusmod sit consectetur qui. Labore voluptate irure Lorem ullamco proident commodo reprehenderit nostrud veniam consectetur consectetur. 
                            Quis cillum aliquip pariatur quis nisi labore tempor ipsum est nulla veniam aliquip. Exercitation aute pariatur reprehenderit tempor duis laborum adipisicing laborum.
                        </p>

                        <p>
                            Labore non laborum duis dolore aliquip dolor quis labore est occaecat irure tempor mollit. Id eiusmod sit consectetur qui. Labore voluptate irure Lorem ullamco proident commodo reprehenderit nostrud veniam consectetur consectetur. 
                        </p>
                    </Col>

                    <Col className="aboutCol2" xs={12} sm={12} md={6}>
                        <Container className="aboutImageContainer">
                            <Image className="aboutImage img-fluid" height="480" width="400" src={outside} alt="delicious food"/>
                            <Image className="aboutImage2 img-fluid" height="480" width="400" src={bar2} alt="delicious food"/>
                        </Container>
                    </Col>
                </Row>
        </Container>
    </Container>
  )
}
