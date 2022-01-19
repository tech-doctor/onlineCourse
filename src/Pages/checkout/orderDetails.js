import React from 'react';
import CheckoutList from './checkoutList';
import moment from 'moment';

const  orderDetails = ({orders}) => {
   
  return (
    <div>
      <div className = "OrderDetails">
        <div className="heading">
          <p>Order Details</p>
        </div> 
        <div >
          { orders?.map((data, i) =>
          <CheckoutList
           key = {i}
            imageAlt ={data.snippet.title} 
            imageSrc = {data.snippet.thumbnails.high.url}
            title = {data.snippet.title}
            date = {moment(data.snippet.publishedAt).fromNow()}
            newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
            previousPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30} 
          /> )}
        </div>
       </div>
    </div>
  );
}

export default orderDetails;