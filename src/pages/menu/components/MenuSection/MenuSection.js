import React from 'react';
import { Col, Container, Row, Image, Button, Tabs, Tab, Nav } from 'react-bootstrap';
import { FaIcons } from 'react-icons/fa';
import { Pizza } from '../../Data';
import BreakfastMenu from '../MenuItem/BreakfastMenu';
import DrinksMenu from '../MenuItem/DrinksMenu';
import IceCream from '../MenuItem/IceCream';
import LunchMenu from '../MenuItem/LunchMenu';
import MenuItem from '../MenuItem/MenuItem'
import PizzaMenu from '../MenuItem/PizzaMenu';
import Specials from '../MenuItem/Specials';
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
                            <Col xs={12} sm={3} md={6} className="menuContentLeft">
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
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="fourth">Pizza</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="fifth">Icecream</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="menuTabLink" eventKey="sixth">Specials</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs={12} sm={9} md={6} className="menuContentRight">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <BreakfastMenu/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <LunchMenu/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <DrinksMenu/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <PizzaMenu/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <IceCream/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <Specials/>
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
