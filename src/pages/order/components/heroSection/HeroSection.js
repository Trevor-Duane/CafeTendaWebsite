import React from 'react';
import './heroSection.css';
import whatsapp from "../../../../assets/images/whatsapp.png";
import landline from "../../../../assets/images/phone.png";
import playstore from "../../../../assets/images/playstore.png";
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <Container fluid className="orderingHeroWrapper">
      <Container className="orderingHeroContainer">
        <Row className="orderingHeroRow">
          <Col className="orderingHeroLeft">
            <div className="orderAdSection">
              <div className="sectionIconImage">
                <img src={playstore} className="img-fluid" height="50" width="50" alt=""/>
              </div>
                <div className="sectionText">
                  <h5>TendaExpress App</h5>
                  <h5>Download app from playstore</h5>
                </div>
            </div>

            <div className="orderAdSection">
              <div className="sectionIconImage">
                <img src={whatsapp} className="img-fluid" height="50" width="50" alt=""/>
              </div>
              <div className="sectionText">
                <h5>Whatsapp to order</h5>
                <h5>0770973650</h5>
              </div>
            </div>

            <div className="orderAdSection">
                <div className="sectionIconImage">
                  <img src={landline} className="img-fluid" height="50" width="50" alt=""/>
                </div>
                <div className="sectionText">
                  <h5>Call to order</h5>
                  <h5>0770973650 | 0709715032</h5>
                </div>
            </div>
            <div>
              <Button className="orderSectionButton">View Menu</Button>
            </div>
          </Col>
          <Col className="orderingHeroRight">
            <div className="startScreen"></div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
