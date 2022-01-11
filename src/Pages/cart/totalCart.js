import React from 'react'
import '../../Styles/cart.scss'
import { Link } from 'react-router-dom'


const  TotalCart = (props) => {
  const {mainPriceSum, discountPriceSum} = props

   const discount = () => {
    const  oldPrice = mainPriceSum();
    const  newPrice = discountPriceSum()
    const discountPercent = Math.round(((oldPrice - newPrice)/oldPrice) * 100)
    return discountPercent
   }

 
  return ( 
    <div style = {{border: '1px solid black'}} className = "total">
      <p style = {{fontSize: '22px'}}>Total:</p>
      <span style = {{fontSize: '22px', fontWeight: '700'}}>₦{discountPriceSum()}</span><br/>
      <span style = {{textDecoration: 'line-through'}}>₦{mainPriceSum()}</span><br/>
      <span>{discount()}% off</span><br/>
      <Link className='button' to  = 'cart/checkout'><button  style = {{width: '100%', cursor: 'pointer'}}>Checkout</button></Link>
    </div>    
  )
}

export default TotalCart
