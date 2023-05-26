import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import './navigation.css';

const pages = [
  {
    id: 1,
    name: "Home",
    path:"/"
  },
  {
    id: 2,
    name: "Our Menu",
    path:"/our-menu"
  },
  {
    id: 3,
    name: "About Us",
    path:"/about-us"
  },
  {
    id: 4,
    name: "Catering & Events",
    path:"/catering-events"
  },
  {
    id: 5,
    name: "Reservations",
    path:"/reservations"
  },
  {
    id: 6,
    name: "Contact & Hours",
    path:"/contact"
  },
  {
    id: 7,
    name: "Careers",
    path:"/careers"
  }
];


function MyNavbar() {
  const [isActive, setIsActive] = React.useState(null)
  const [selected, setSelected] = React.useState(null)
  return (
    <Navbar expand="lg" className="mainNav" sticky='top'>
      <Container className="thisContainer">
        <Navbar.Brand href="#home">
          <img src={logo}
          width="93"
          height="70"
          className="d-inline-block align-top"
          alt="cafe tenda logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 myNav">
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                    <NavLink 
                      to={page.path}
                      onClick={() => {
                        setIsActive(page.id)
                        setSelected(page.id)
                      }}
                      className="nav-link"
                      >{page.name}
                    </NavLink>
                </li>
              ))}
            </ul>
            
            <div>
              <Button className= "orderNowButton text-white">
                <NavLink
                  className="nav-link button-link"
                  to="/online-orders"
                >ORDER NOW</NavLink>
              </Button>
            </div>            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;