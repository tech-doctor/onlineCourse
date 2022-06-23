import React from 'react'
import '../../Styles/cart.scss'
import { useHistory } from 'react-router-dom'
import { updateTotalCheckoutList } from '../../Store/databaseSlice'
import { useDispatch, useSelector } from 'react-redux'


const  TotalCart = (props) => {
  const {previousPriceSum, newPriceSum} = props
  const dispatch = useDispatch();
  const history = useHistory();
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)

   const discount = () => {
    const  oldPrice = previousPriceSum().sum;
    const  newPrice = newPriceSum().sum
    const discountPercent = Math.round(((oldPrice - newPrice)/oldPrice) * 100)
    return discountPercent
   }

   const handleClick = () => {
     cartList.map(data => (
        dispatch(updateTotalCheckoutList(data))
     ))
     history.push('./cart/checkout')
   }
  

 
  return ( 
    <div className = "total">
      <p style = {{fontSize: '22px'}}>Total:</p>
      <span style = {{fontSize: '22px', fontWeight: '700'}}>₦{newPriceSum().amount}</span><br/>
      <span style = {{textDecoration: 'line-through', color: '#667085'}}>₦{previousPriceSum().amount}</span><br/>
      <span style={{color: ' #074942'}}>{discount()}% off</span><br/>
      <button onClick={handleClick}  style = {{width: '100%', cursor: 'pointer'}}>Checkout</button>
    </div>    
  )
}

export default TotalCart
