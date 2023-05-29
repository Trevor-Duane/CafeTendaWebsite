import React from 'react';
import { Col, Container, Row, Image, Button, Tabs, Tab, Nav } from 'react-bootstrap';
import BreakfastMenu from '../MenuItem/BreakfastMenu';
import MenuItem from '../MenuItem/MenuItem'
import './menuSection.css';

export default function MenuSection() {
  return (
    <Container fluid className="dishMenuWrapper">
            <Container className="dishMenuContent">
                <div className="dishMenuContentHead">
                    <h5>Our Menu</h5>
                    <p>Something for everyone</p>
                </div>

                <div className="dishMenuTabWrapper">
                    <Tab.Container id="menuCategoryTabs" defaultActiveKey="first">
                        <Row>
                            <Col sm={3} className="menuContentLeft">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="first">Breakfast</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="second">Lunch/Dinner</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="third">Drinks</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} className="menuContentRight">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <BreakfastMenu/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <MenuItem title="Lunch/Dinner"/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <MenuItem title="Drinks"/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container> 
        </Container>
  )
}
