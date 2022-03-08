import React from 'react';
import { Link, useHistory } from "react-router-dom"
//import { Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import OrderDetails from './orderDetails';
import DebitCard from '../../Component/debitCard';
import Summary from './summary'
import '../../Styles/checkOut.scss';


const  CheckOut = ()  => {
  const history = useHistory();
  const checkoutList = useSelector(state => state.rootReducer.databaseSlice.checkoutList)

  const originalPriceSum = () => {
    let sum  = 0
    checkoutList?.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30
    })
     return sum 
  }

  const discountPriceSum = () => {
    let sum  = 0
    checkoutList?.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0')
    })
     return originalPriceSum() - sum
  }


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
      <div className = "checkout_body">
       <div className ="center-div">
        {/* <div style = {{textAlign: 'center', padding: '100px'}}  >
          <Spinner/>
        </div> */}
				<div className = "title">
					<p>checkout</p>
				</div>
				<div className = "body">
          <div className= "left">
            <div className = "paystack-page">
              <div className='paystack-details'>
                <p>Payment integration  is done with paystack. Use any of the test card options   or another card with the details below to make your payment. <span style={{fontSize: '13px'}}>Note this is not a real time payment process.</span> </p>
              </div>
              <div className='bank-card'>
                <DebitCard/>
              </div>
            </div>
            <div>
              <OrderDetails
              checkoutList = {checkoutList}
              />
            </div>
          </div>
          <div className = "right">
             <Summary
              originalPriceSum = {originalPriceSum}
              discountPriceSum = {discountPriceSum}
              checkoutList = {checkoutList}
             />
          </div>
				</div>  
			</div>
      </div>
			
		</div>
	)
}

export default CheckOut
