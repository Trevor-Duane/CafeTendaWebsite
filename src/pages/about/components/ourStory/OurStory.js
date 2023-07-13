import React from 'react';
import { Container } from 'react-bootstrap';
import './ourStory.css';

export default function OurStory() {
  return (
    <Container fluid className="ourStoryFluid">
        <Container className="ourStoryWrapper">
            <div className='ourStoryHead'>
                <h5>Our Story</h5>
                <p>Cafe Tenda and Simple is better</p>
            </div>

            <div className="ourStoryStory">
              <p>
                Café Tenda Restaurant serves delicious meals and party snacks to businesses in and
                around Kampala.We are located at Bwebajja, Entebbe Road between Stabex Petrol
                Station and Tosha Petrol station. Café Tenda has developed a reputation for efficiency and
                excellence.
              </p>
              <p>
                We specialize in creative fusion cuisine, choosing the best from all food traditions and we
                are flexible to meet customer expectations as regards to the quality of food served
              </p>
              <p>
                We also cater meals for parties of any size; whether your catering needs are for a large
                gathering or an intimate party, We have a fully-fledged state-of-the-art kitchen and employ
                over 20 full-time members and temporary on-call servers and bar tenders,so we are sure
                can handle any kind of event. We pride ourselves on creating gourmet cuisine for
                everyone. We want all your guests to enjoy our food!
              </p>
              <p>
                Our mission is to provide a unique experience to our customers through delivering great
                food, attentive &amp; friendly service, and welcoming presence at excellent price to our clients.
              </p>
              <p>
                Our vision is to establish Cafe&#39; Tenda as a top Cafe and Restaurant brand in Uganda and
                within the Region
              </p>
              <p>
                Our core values are; Team work, Integrity, Attentive &amp; Friendly Service, Welcoming Presence, Quality Food
              </p>
            </div>
        </Container>
    </Container>
  )
}
