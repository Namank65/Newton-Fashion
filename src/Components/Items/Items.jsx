import React from 'react'

const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">

            </div>
            <div className="item-price-old">
                
            </div>
        </div>
    </div>
  )
}

export default Items;