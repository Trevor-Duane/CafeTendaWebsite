import React from 'react';
import './Itemstyles.css'

export default function SingleItem({name, price, description}) {
  return (
        <div className='menuItemSingle'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <span className='menuItemName'>{name}</span>
                <span className='menuItemPrice'>{price}</span>
            </div>
            <div className='menuItemDescription'>
                <p>{description}</p>
            </div>
        </div>
  )
}
