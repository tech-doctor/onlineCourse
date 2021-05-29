import React from 'react'
import '../../Styles/cart.scss'


const  TotalCart = () => {
  return ( 
    <div style = {{border: '1px solid black'}} className = "total">
      <p style = {{fontSize: '22px'}}>Total:</p>
      <span style = {{fontSize: '25px', fontWeight: '700'}}>$19.98</span><br/>
      <span style = {{textDecoration: 'line-through'}}>$189.88</span><br/>
      <span>89% off</span><br/>
      <button style = {{width: '100%'}}>Checkout</button>
    </div>    
  )
}

export default TotalCart
