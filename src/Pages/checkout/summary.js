import React from 'react';

const summary = () =>  {
  return (
    <div>
      <div className='summary'>
        <div className='heading'>
          <p>Summary</p>
        </div>
        <div className='details'>
          <div className='price'>
            <p>Original Price</p>
            <p>Discount Price</p>
          </div>
          <div className='amount'>
            <p>$79.60</p>
            <p>-$40.00</p>
          </div>
        </div>
        <hr/>
        <div className='total'>
          <p>Total</p>
          <p>$39.00</p>
        </div>
        <div className='payment-notice'>
          <p>By completing your purchase, you agree with the <span> terms and condition </span></p>
        </div>
        <div className='payment-button'>
          <button>Complete payment</button>
        </div>  
      </div>
    </div>
  );
}

export default summary;