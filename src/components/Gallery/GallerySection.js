import React, { useRef } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import eats from '../../assets/images/eats.jpg'
import burger from '../../assets/images/burger.jpg'
import salad from '../../assets/images/salad.jpg'
import blue from '../../assets/images/blue.jpg'
import drinks from '../../assets/images/drinks.jpg'
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
     width: 500,
     height: 334,
     tags:[
      {value: "Plain Chips", title:"Fries"}
     ]
  },
  {
     src: salad,
     width: 500,
     height: 334,
     tags: [
        { value: "Salads", title: "Salads" },
     ]
  },
  {
   src: fries,
   width: 500,
   height: 334,
   tags: [
      { value: "Fish Fingers", title: "Fish" },
   ],
   },
   {
      src: sausage,
      width: 500,
      height: 334,
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
         // {
         //    src: bar2,
         //    width: 400,
         //    height: 267,
         //    tags: [
         //       { value: "Interior", title: "Cafe Tenda" },
         //    ]
         // },
];

export default function GallerySection() {

   const [width, setWidth] = React.useState(window.innerWidth)


   React.useEffect(() => {
      const handleWindowResize = () => {
         setWidth(window.innerWidth)

      }
      window.addEventListener("resize", handleWindowResize)
      console.log(width)


      return () => {
         window.removeEventListener('resize', handleWindowResize)
      }
   })
  return (
    <Container fluid className="gallerySection">
    <Container className='galleryContainer'>
            <div className='galleryHead'>
                <h5>Gallery</h5>
                <p>Every great story needs a picture</p>
            </div>

            <Row className="p-0">
                <Col xs={12} sm={12} md={12} className="galleryImageGrid">
                    <Gallery images={images} maxRows={`${width < 525 ? 4 : 1}`} margin={3} rowHeight={280} tagStyle={{color: "#fff", backgroundColor: "rgba(0,0,0,.7)",fontWeight: "bold", fontSize: ".75em", padding: 4, borderRadius: 4}}/>
                    <Gallery images={images2} maxRows={1} margin={3} rowHeight={280} tagStyle={{color: "#fff", backgroundColor: "rgba(0,0,0,.7)",fontWeight: "bold", fontSize: ".75em", padding: 4, borderRadius: 4}}/>
                    <Gallery images={images3} maxRows={1} margin={3} rowHeight={280} tagStyle={{color: "#fff", backgroundColor: "rgba(0,0,0,.7)",fontWeight: "bold", fontSize: ".75em", padding: 4, borderRadius: 4}}/>
                </Col>
            </Row>
    </Container>
</Container>
  )
}
