import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import interior from '../../assets/images/bar.JPG'
import outside from '../../assets/images/outside.jpg'
import eats from '../../assets/images/eats2.JPG'
import Carousel from 'nuka-carousel'
import './content.css'

export default function Content() {
  const [serve, setServe] = React.useState([
    {
      "id": 1,
      "name": "Breakfast",
      "description": "Life begins with a good breakfast, Cafe Tenda for a breakfast next to unique",
      "img": "https://img.freepik.com/free-photo/breakfast-valentine-s-day-fried-eggs-bread-shape-heart-fresh-vegetables_114579-82640.jpg?w=1060&t=st=1684235485~exp=1684236085~hmac=05be4b2f2e6df619ae445c55cc7614d9c04c4685cc16176c8a56695315808497"
    },
    {
      "id": 2,
      "name": "Lunch & Dinner",
      "description": "For the best delicious food in town, Cafe Tenda brings the party to your taste buds",
      "img": "https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26411.jpg?w=996&t=st=1684239412~exp=1684240012~hmac=7be18c8818d5c5fe903cb5b44ef48ca4cc7fbf26cc73e7d746bcda4a015d8ec5"
    },
    {
      "id": 3,
      "name": "Catering Services",
      "description": "Birthday or graduation party, bridal or baby shower, comes with a free venue",
      "img": "https://img.freepik.com/free-photo/eat-wedding-plate-lunch-healthy_1203-4049.jpg?w=996&t=st=1684239309~exp=1684239909~hmac=92376471e2546a37b264a78dbbea6edad85fc877bf37046edda7dd088191da24"
    },
    // {
    //   "id": 4,
    //   "name": "Deliveries",
    //   "description": "Don't feel like leaving your couch, lucky for you, we deliver to your doorstep or couch",
    //   "img": "https://www.pngkit.com/png/full/260-2600020_we-deliver-we-deliver.png"
    // },
    {
      "id": 5,
      "name": "Workhub",
      "description": "We have space for you to set up an office in an environment that encourages flexibility",
      "img": "https://img.freepik.com/free-photo/online-school-equipment-home_23-2149041148.jpg?w=1060&t=st=1684238014~exp=1684238614~hmac=e539d58d6a917db78a59a6ef9d889072083e558a04f753d6167ee30ab4017db7"
    },
    {
      "id": 6,
      "name": "Suites & Lounge",
      "description": "For the stylish traveller or tourist, A ool low-key space for you to spend a night after a long flight",
      "img": "https://img.freepik.com/free-photo/hotel-bell_1203-2898.jpg?w=1060&t=st=1684237849~exp=1684238449~hmac=45c1043d458b63d735e19098527b1b5fc2c000fcd44fb41afb3e4737f72d7389"
    },
  ])
  return (
        <Container fluid className="p-0">
          <Row className="contentRow m-0 p-0">
            <Col className="contentCol1 p-0" xs={12} sm={12} md={12}>
              <Carousel
                autoplay={true} autoplayInterval={3000} wrapAround={true}>
                <Image  className="img-fluid" height="540" src={outside} alt="cafe tenda interior"/>
                <Image className="img-fluid" height="540" src={interior} alt="cafe tenda interior"/>
                <Image className="img-fluid" height="540" src={eats} alt="cafe tenda interior"/>
              </Carousel>
            </Col>
          </Row>
          <Container className="weServe">
            <Row>
              <Col>
                <div className='weServeHead'>
                  <h5>We Serve</h5>
                  <p>Cafe Tenda Restaurant & Lounge</p>
                </div>
                <div className="serveContainersWrappers">
                  {serve.map((item) => (
                    <div key={item.id} className="serveContainers">
                      <div className=''>
                        <img className="serveImg img-fluid" src={item.img} alt={item.name}/>
                      </div>
                      <div>
                        <h6 className="serveBigText">{item.name}</h6>
                      </div>
                      <div>
                        <p className="serveText">{item.description}</p>
                      </div>
                    
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            
          </Container>
        </Container>
  )
}

