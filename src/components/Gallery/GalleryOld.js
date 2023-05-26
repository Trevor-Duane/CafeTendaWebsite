import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import eats from '../../assets/images/eats.JPG'
import bar2 from '../../assets/images/bar2.JPG'
import burger from '../../assets/images/burger.JPG'
import salad from '../../assets/images/salad.JPG'
import blue from '../../assets/images/blue.JPG'
import drinks from '../../assets/images/drinks.JPG'
import fries from '../../assets/images/fries.jpeg'
import bread from '../../assets/images/bread.jpeg'
import sausage from '../../assets/images/sausage.jpeg'
import tomato from '../../assets/images/tomato.jpeg'
import farge from '../../assets/images/farge.jpeg'
import platter from '../../assets/images/platter.jpeg'
import lemon from '../../assets/images/lemon.jpeg'
import ribs from '../../assets/images/ribs.jpeg'
import { Gallery } from "react-grid-gallery";
import './gallery.css';

const images = [
  {
     src: eats,
     width: 400,
     height: 267,
     tags:[
      {value: "Plain Chips", title:"Fries"}
     ]
  },
  {
     src: salad,
     width: 400,
     height: 267,
     tags: [
        { value: "Salads", title: "Salads" },
     ]
  },
  {
   src: fries,
   width: 400,
   height: 267,
   tags: [
      { value: "Fish Fingers", title: "Fish" },
   ],
   },
   {
      src: sausage,
      width: 400,
      height: 267,
      tags: [
         { value: "Chicken Lolipops", title: "Fish" },
      ],
      },
         
];

const images2 = [
   {
      src: ribs,
      width: 400,
      height: 267,
      tags: [
         { value: "Ribs", title: "Beef" },
      ],
      },
      {
         src: platter,
         width: 400,
         height: 267,
         tags: [
            { value: "Fruits", title: "Fruits" },
         ],
         },
         {
            src: bread,
            width: 400,
            height: 267,
            tags: [
               { value: "Tenda Breakfast", title: "breakfast" },
            ],
            },
            {
               src: farge,
               width: 320,
               height: 213,
               tags: [
                  { value: "Dessert", title: "dessert" },
               ],
               },
         
         
];

const images3 = [
   {
      src: burger,
      width: 150,
      height: 213,
      tags: [
         { value: "Burger", title: "burger" },
      ],
      },
      {
         src: tomato,
         width: 400,
         height: 377,
         tags: [
            { value: "Breakfast", title: "breakfast" },
         ],
         },
         {
            src: drinks,
            width: 400,
            height: 267,
            tags: [
               { value: "Cool Drinks", title: "Cocktails" },
            ]
         },
         {
            src: blue,
            width: 150,
            height: 213,
            tags: [
               { value: "Drinks", title: "Blue" },
            ]
         },
         {
            src: lemon,
            width: 400,
            height: 466,
            tags: [
               { value: "Fresh Lemon", title: "Juice" },
            ]
         },
         {
            src: bar2,
            width: 400,
            height: 267,
            tags: [
               { value: "Interior", title: "Cafe Tenda" },
            ]
         },
];

export default function GallerySection() {
  return (
    <Container fluid className="gallerySection">
    <Container>
            <div className='galleryHead'>
                <h5>Gallery</h5>
                <p>Every story needs a picture</p>
            </div>

            <Row className="p-0">
                <Col xs={12} sm={12} md={12} className="galleryImageGrid">
                    <Gallery images={images} maxRows={3}/>
                    <Gallery images={images2} maxRows={3}/>
                    <Gallery images={images3} maxRows={3}/>
                </Col>
            </Row>
    </Container>
</Container>
  )
}
