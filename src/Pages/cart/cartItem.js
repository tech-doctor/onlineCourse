import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Badge } from "@chakra-ui/react";
import { updateCheckoutList } from "../../Store/databaseSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const history  =  useHistory();
  //const toast =  useToast();
  const { data, id, imageAlt, imageSrc, title, date, newPrice, oldPrice, bestSelling } = props
 // const purchasedItem = useSelector(state => state.rootReducer.courseSlice.purchasedItem)
  

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
     history.push('./cart/checkout')
    //  const itemIndex = purchasedItem.findIndex(item => item.snippet.title === data.snippet.title);
    //  itemIndex === -1 ? history.push(`/cart/checkout`):
    //  handleToast('Item already bought', 'error')
   }
   
 


    return (
        <div  className = "cartList">
          <Link style = {{textDecoration: 'none', color: 'black'}} to = {`courses/${id}`}>
          <div className = "left">
            <div className ="image">
              <img  alt = {imageAlt} src = {imageSrc}/>
            </div>
            <div className = 'title-details'>
              <p className="cart-title">{title}</p>
              <p className="cart-date">{date}</p>
              {bestSelling ? 
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
              <button 
              style = {{cursor: 'pointer', }}
              onClick= {handleClick}
              >BUY</button>
            </div>
          </div>
      </div>
    )
  }

  export default CartItem