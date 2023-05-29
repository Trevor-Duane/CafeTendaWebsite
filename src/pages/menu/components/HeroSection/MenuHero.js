import React from 'react'
import foode from '../../../../assets/images/foode.png'
import { Col, Container, Row, Image, Button, Tabs, Tab, Nav } from 'react-bootstrap';
import './menuHero.css'


export default function MenuHero() {
  return (
    <Container fluid className="menuHerofluid p-0">
        <Container fluid className="menuHeroWrapper">
           <Container className="menuHeroContent">
                <div className="menuHeroText">
                    <h5>
                        We Serve The Taste<br></br> You Love😋
                    </h5>
                    <p>
                        Cillum aliquip nulla occaecat veniam cupidatat enim labore amet. Aute velit ullamco et eu irure sit magna adipisicing consequat. Pariatur elit ipsum fugiat ex ea enim enim enim. Amet sit nostrud irure occaecat sint labore incididunt officia. Nostrud id cillum qui est ea nulla exercitation ipsum duis sint.
                    </p>
                </div>
                <div className="menuHeroButtons">
                    <Button className='mx-1 menuHeroButton1'>Reservations</Button>
                    <Button className='mx-1 menuHeroButton2'>Order Now</Button>
                </div>
           </Container>
        </Container>

        
    </Container>
  )
}
