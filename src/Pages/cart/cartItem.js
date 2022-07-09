import React from "react";
import { Link, useHistory} from "react-router-dom";
import {useToast } from "@chakra-ui/react";
import { updateCheckoutList,removeItem } from "../../Store/databaseSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const history  =  useHistory();
  
  const { data, id, imageAlt, imageSrc, title, date, newPrice, oldPrice, bestSelling } = props;
  

  const handleToast = (description, status) => {
    toast({
      position: 'top-right',
      status,
      description,
      duration: 2000,
    });
  }


   const checkoutCourse = () => {
     dispatch(updateCheckoutList(data))
     history.push('./cart/checkout')
   }
   
   const handleRemove = () => {
      dispatch(removeItem(data))
      handleToast('Item removed from Cart', 'error');
   }
 


    return (
        <div className = "cartList">
          <Link style = {{textDecoration: 'none', color: 'black'}} to =  {{pathname: `/courses/${id}`, state: {prevPath: history.location.pathname,position: data.position}}}>
          <div className = "left">
            <div className ="image">
              <img width={'400px'} height = {'100%'}  alt = {imageAlt} src = {imageSrc}/>
            </div>
            <div className = 'title-details'>
              <p className="cart-title">{title}</p>
              <p className="cart-date">{date}</p>
              {bestSelling ? 
              <div className='best-selling'>
              BEST SELLING
            </div>: ''}
            </div>
          </div>
          </Link> 
          <div className ="right">
            <div  className = "remove">
              <span 
              onClick = {handleRemove}
              >REMOVE</span>
            </div>
            <div className = "price-tag">
              <p style={{fontWeight: '650'}}>₦{newPrice}</p>
              <p style = {{textDecoration: 'line-through', color: '#667085'}}>₦{oldPrice}</p>
              <button 
              style = {{cursor: 'pointer', }}
              onClick= {checkoutCourse}
              >BUY</button>
            </div>
          </div>
      </div>
    )
  }

  export default CartItem