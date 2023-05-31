import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './reservationHero.css';

export default function ReservationHero() {
  return (
    <Container fluid className="reservationHeroFluid">
        <Container className="reservationHeroWrapper">
            <div className="reservationBox">
                <div className="formWrapper col-sm-12">
                    <h5>Dine with us</h5>
                    <p>Please fill in following for reservation</p>
                    <form className="reserveForm">
                        <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                            <Form.Label className="reserveFormLabel">Customer Name</Form.Label>
                            <Form.Control type="email" placeholder="name" />
                        </Form.Group>

                        <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                            <Form.Label className="reserveFormLabel">Mobile</Form.Label>
                            <Form.Control type="email" placeholder="07-XXXXXX" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label className="reserveFormLabel">Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                     
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="reserveFormLabel">Reservation Notes</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="...addition information" />
                        </Form.Group>

                        <div>
                            <Button className="reserveButton">Make Reservation</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    </Container>
  )
}
