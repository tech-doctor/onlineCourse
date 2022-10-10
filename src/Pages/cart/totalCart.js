import React from 'react';
import { useHistory } from 'react-router-dom'
import { updateTotalCheckoutList } from '../../Store/databaseSlice'
import { useDispatch, useSelector } from 'react-redux';
import '../../Styles/cart.scss'

const  TotalCart = ({cartList}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)
  const sum = (extra) => {
    let sum  = 0
    cartList.forEach (data => {
      sum += Math.floor(new Date(data.publishedAt).getDate() + '0') + extra
    })
     const amount = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     return {
      amount,
      sum
     }
  }
   const discount = () => {
    const  oldPrice = sum(30).sum;
    const  newPrice = sum(0).sum
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
      <span style = {{fontSize: '22px', fontWeight: '700'}}>₦{sum(0).amount}</span><br/>
      <span style = {{textDecoration: 'line-through', color: '#667085'}}>₦{sum(30).amount}</span><br/>
      <span style={{color: ' #074942'}}>{discount()}% off</span><br/>
      <button onClick={handleClick}  style = {{width: '100%', cursor: 'pointer'}}>Checkout</button>
    </div>    
  )
}

export default TotalCart
