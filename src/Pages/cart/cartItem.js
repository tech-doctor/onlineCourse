import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Badge, useToast } from "@chakra-ui/react";
import { updateCheckoutList } from "../../Store/databaseSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const history  =  useHistory();
  const toast =  useToast();
  const { data, id, imageAlt, imageSrc, title, date, newPrice, oldPrice } = props
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  

  // const handleToast = (description, status) => {
  //   toast({
  //     position: 'top-right',
  //     status,
  //     description,
  //     duration: 2000,
  //   });
  // }


   const handleClick = () => {
     dispatch(updateCheckoutList(data))
    //  const itemIndex = purchasedItem.findIndex(item => item.snippet.title === data.snippet.title);
    //  itemIndex === -1 ? history.push(`/cart/checkout`):
    //  handleToast('Item already bought', 'error')
   }
   
 


    return (
      <div>
        <div  className = "cartList">
          <Link style = {{textDecoration: 'none', color: 'black'}} to = {`courses/${id}`}>
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
          </Link> 
          <div className ="right">
            <div  className = "remove">
              <span>X</span>
            </div>
            <div className = "price-tag">
              <p style={{fontWeight: '650'}}>₦{newPrice}</p>
              <p style = {{textDecoration: 'line-through'}}>₦{oldPrice}</p>
              {/* <Link style = {{textDecoration: 'none', color: 'black'}} to = 'cart/checkout'> */}
              <button 
              style = {{cursor: 'pointer', }}
              onClick= {handleClick}
              >BUY</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default CartItem