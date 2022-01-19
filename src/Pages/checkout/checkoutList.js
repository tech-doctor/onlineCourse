import React from 'react';

const  CheckoutLIst = (props) => {
  const {title, imageSrc, imageAlt, newPrice, previousPrice} = props;
 
  return (
    <div className='details'>
      <div className='left'>
        <img alt= {imageAlt} src = {imageSrc}/>
        <div className='about'>
          <p>{title}</p>
        </div>
      </div>
      <div className='right'>
        <span>₦{newPrice}</span><br/>
        <span style = {{textDecoration: 'line-through'}}>₦{previousPrice}</span><br/>
      </div>
    </div>
  );
}

export default CheckoutLIst;