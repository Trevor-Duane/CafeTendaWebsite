import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Itemstyles.css'
import SingleItem from './SingleItem'
import { breakfastCombos, breakfastSandwiches } from '../../Data'

export default function MainMenu({title}) {
  return (
    <Row className='menuItemRow'>
        <Col sm={12}>
            <div className="menuItemsHeader">
                <h5>Breakfast Combos</h5>
            </div>

           {
            breakfastCombos.map((item) => (
                <SingleItem
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
            />
            ))
           }
        </Col>
        {/* <Col sm={6}>
            <div className="menuItemsHeader">
                <h5>Breakfast Sandwiches</h5>
            </div>

            {breakfastSandwiches.map((item) => (
            <SingleItem
                key={item.id}
                name={item.name}
                price={item.price}
            />
            ))}
        </Col> */}
    </Row>
  )
}
