import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@chakra-ui/react";
import { updateCheckoutList } from "../../Store/databaseSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
   const { data, id, imageAlt, imageSrc, title, date, newPrice, oldPrice } = props
   const dispatch = useDispatch()


   const handleClick = () => {
     dispatch(updateCheckoutList(data))
     //console.log(data.snippet.title)
   }
 


    return (
      <div>
        <div  className = "cartList">
          {/* <Link style = {{textDecoration: 'none', color: 'black'}} to = 'courses/course-selected'> */}
          <div className = "left">
            <div className ="image">
              <img  alt = {imageAlt} src = {imageSrc}/>
            </div>
            <div className = 'title-details'>
              <p className="cart-title">{title}</p>
              <p className="cart-date">{date}</p>
              {newPrice > 160 ? 
              <Badge className='best-selling' variant="solid" colorScheme="green" px={2}>
              Best Selling
            </Badge>: ''}
            </div>
          </div>
          {/* </Link>  */}
          <div className ="right">
            <div  className = "remove">
              <span>X</span>
            </div>
            <div className = "price-tag">
              <p style={{fontWeight: '650'}}>₦{newPrice}</p>
              <p style = {{textDecoration: 'line-through'}}>₦{oldPrice}</p>
              <Link style = {{textDecoration: 'none', color: 'black'}} to = 'cart/checkout'>
              <button 
              style = {{cursor: 'pointer', }}
              onClick= {handleClick}
              >BUY</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default CartItem