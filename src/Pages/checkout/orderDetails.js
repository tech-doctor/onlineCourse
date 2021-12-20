import React from 'react';

const  orderDetails = () => {
  return (
    <div>
      <div className = "OrderDetails">
        <div className="heading">
          <p>Order Details</p>
        </div>
        <div className='details'>
          <div className='left'>
              <img alt='img' src='../Assets/React-frontend.jpg'/>
            <div className='about'>
              <p>Title</p>
            </div>
          </div>
          <div className='right'>
            <span>$20</span><br/>
            <span style = {{textDecoration: 'line-through'}}>$40</span><br/>
          </div>
        </div>
        <div className='details'>
          <div className='left'>
              <img alt='img' src='../Assets/React-frontend.jpg'/>
            <div className='about'>
              <p>Title</p>
            </div>
          </div>
          <div className='right'>
            <span>$20</span><br/>
            <span style = {{textDecoration: 'line-through'}}>$40</span><br/>
          </div>
        </div>
       </div>
    </div>
  );
}

export default orderDetails;