import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";
//import { Spinner } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCheckoutList } from '../../Store/databaseSlice';
import OrderDetails from './orderDetails';
import Summary from './summary';
import DebitCard from '../../Component/View/debitCard';
import Logo from '../../Component/Layout/Logo';
import '../../Styles/checkOut.scss';

const  CheckOut = ()  => {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkoutList = useSelector(state => state.rootReducer.databaseSlice.checkoutList);

  useEffect (() => {
  if(checkoutList.length === 0){
    history.goBack();
  }
    return () => {
      dispatch(resetCheckoutList());  
    }
  }, [dispatch]);

const cancel = () => {
  history.goBack()
}
	return (
		<div className = "checkOutPage">
			<div className= 'header'>
        <Logo
        src={'/Assets/Logo.png'}
        color={'#173A56'}
        />
        <div  className= "cancel"
          onClick={cancel}>
          Cancel
        </div>
      </div>
      <div className = "checkout_body">
       <div className ="center_div">
        {/* <div style = {{textAlign: 'center', padding: '100px'}}  >
          <Spinner/>
        </div> */}
				<div className = "body">
          <div className= "left">
            <div className = "paystack-page">
              <div className='paystack-details'>
                <p>Payment integration  is done with paystack. Use any of the test card options  or <span style={{color: 'black', fontWeight: '600'}}>another card with the details below</span> to make your payment.</p>
                <span style={{fontSize: '13px',fontWeight: '600'}}>Note: This is not a real time payment process.</span>
              </div>
              <div className='bank-card'>
                <DebitCard/>
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
		</div>
	)
}

export default CheckOut
