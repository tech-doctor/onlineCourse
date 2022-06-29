import React from 'react';
import { useHistory } from 'react-router-dom'
import { updateTotalCheckoutList } from '../../Store/databaseSlice'
import { useDispatch, useSelector } from 'react-redux';
import '../../Styles/cart.scss'


const  TotalCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)

  const previousPriceSum = () => {
    let sum  = 0
    cartList.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30
    })
     const amount = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     return {
        amount,
        sum
     }
  }

  const newPriceSum = () => {
    let sum  = 0
    cartList.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0')
    })
    const amount = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     return {
        amount,
        sum
     }
  }

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
