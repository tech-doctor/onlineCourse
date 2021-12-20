import React from 'react';
import '../../Styles/checkOut.scss';
import { Link, useHistory } from "react-router-dom"
import OrderDetails from './orderDetails';
import Summary from './summary'

const  CheckOut = ()  => {
  const history = useHistory();

	return (
		<div className = "checkOutPage">
			<div className= 'header'>
        <div className= "logo">
          <h2><Link to = "/">LOGO</Link></h2>
        </div>
        <div  className= "cancel"
          onClick={() =>history.goBack()}>
          Cancel
        </div>
      </div>
			<hr/>
			<div className ="center-div">
				<div className = "title">
					<p>checkout</p>
				</div>
				<div className = "body">
          <div className= "left">
            <div className = "payStack-page">
              <div className='paystack-details'>
                <p>Payment integration  is done with paystack. Use any of the test card options   or another card with the details below to make your payment. <span style={{fontSize: '13px'}}>Note this is not a real time payment process.</span> </p>
              </div>
              <div className='bank-card'>

              </div>
            </div>
            <div>
              <OrderDetails/>
            </div>
          </div>
          <div className = "right">
             <Summary/>
          </div>
				</div>  
			</div>
		</div>
	)
}

export default CheckOut
