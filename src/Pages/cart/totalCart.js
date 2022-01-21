import React from 'react'
import '../../Styles/cart.scss'
import { Link } from 'react-router-dom'
import { updateTotalCheckoutList } from '../../Store/databaseSlice'
import { useDispatch, useSelector } from 'react-redux'


const  TotalCart = (props) => {
  const {previousPriceSum, newPriceSum} = props
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)

   const discount = () => {
    const  oldPrice = previousPriceSum();
    const  newPrice = newPriceSum()
    const discountPercent = Math.round(((oldPrice - newPrice)/oldPrice) * 100)
    return discountPercent
   }

   const handleClick = () => {
     cartList.map(data => {
        dispatch(updateTotalCheckoutList(data))
     })
   }

 
  return ( 
    <div style = {{border: '1px solid black'}} className = "total">
      <p style = {{fontSize: '22px'}}>Total:</p>
      <span style = {{fontSize: '22px', fontWeight: '700'}}>₦{newPriceSum()}</span><br/>
      <span style = {{textDecoration: 'line-through'}}>₦{previousPriceSum()}</span><br/>
      <span>{discount()}% off</span><br/>
      <Link 
      onClick={handleClick}
      className='button' to  = 'cart/checkout'><button  style = {{width: '100%', cursor: 'pointer'}}>Checkout</button></Link>
    </div>    
  )
}

export default TotalCart
