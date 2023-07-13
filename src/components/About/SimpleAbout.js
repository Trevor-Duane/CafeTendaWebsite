import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import bar2 from '../../assets/images/bar2.jpg'
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
                            Welcome to Cafe Tenda, we are a full-service, quick-casual restaurant specialized in
                            delivering a relaxed and memorable dining experience. Café Tenda is a warm and
                            inviting restaurantthat serves a contemporary selection of menu items. You are welcome
                            to drop by or call to make your order and we will be more than happy to serve you.
                        </p>

                        <p>
                            We have over 200 carefully selected, mouthwatering menu items. Whatever your taste, it&apos;s
                            well catered for. We value you…. that&apos;s why you will always be served with excellence by
                            our highly skilled service team. Eager to serve you, our experienced wait staff greet you on
                            arrival and lead you to the table of your choice in the well thought out seating
                            arrangement. It has both indoor seating and the outdoor /balcony seating is a great place
                            to “people watch”.
                        </p>
                        <p>
                            The rich aroma of freshly ground coffee is the handiwork of our skilled baristas, adept in
                            latte art. This ensures you get a freshly prepared cup of coffee as the beans are roasted
                            on site.
                        </p>
                        <p>
                            Cafe Tenda is part of Tenda Group like Tenda Suites and Tenda Africa all located in
                            Bwebajja along Entebbe Road between Stabex Petrol station and Tosha Petrol Station.
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
