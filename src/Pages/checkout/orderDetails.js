import React from 'react';

const  orderDetails = () => {
  const orders = [
    {
      imgLink: ' ../Assets/React-frontend.jpg',
      title: 'Here is a little details',
      newPrice: 20.00,
      previousPrice: 40.00
    },
    {
      imgLink: ' ../Assets/React-frontend.jpg',
      title: 'Here is a little details',
      newPrice: 30.00,
      previousPrice: 60.00
    }
  ]
  return (
    <div>
      <div className = "OrderDetails">
        <div className="heading">
          <p>Order Details</p>
        </div>
        {orders.map((data,index) => 
        (<div key={index} className='details'>
          <div className='left'>
              <img alt='img' src = {data.imgLink}/>
            <div className='about'>
              <p>{data.title}</p>
            </div>
          </div>
          <div className='right'>
            <span>${data.newPrice}</span><br/>
            <span style = {{textDecoration: 'line-through'}}>${data.previousPrice}</span><br/>
          </div>
        </div>))}
       </div>
    </div>
  );
}

export default orderDetails;