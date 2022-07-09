import React from 'react';
import CheckoutList from './checkoutList';
import moment from 'moment';
import { useSelector } from 'react-redux';

const  OrderDetails = () => {
  const checkoutList = useSelector(state => state.rootReducer.databaseSlice.checkoutList);

  return (
    <div>
      <div className = "OrderDetails">
        <div className="heading">
          <p>Order Details</p>
        </div> 
        <div >
          {checkoutList?.map((data, i) =>
          <CheckoutList
            key = {i}
            imageAlt ={data.title} 
            imageSrc = {data.imageUrl}
            title = {data.title}
            date = {moment(data.publishedAt).fromNow()}
            newPrice = {new Date(data.publishedAt).getDate() + '0'}
            previousPrice = {Math.floor(new Date(data.publishedAt).getDate() + '0') + 30} 
          /> )}
        </div>
       </div>
    </div>
  );
}

export default OrderDetails;