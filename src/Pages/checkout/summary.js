import React, {useState} from 'react';
import { usePaystackPayment } from 'react-paystack';
import { CircularProgress } from '@chakra-ui/react';
import {useHistory} from 'react-router-dom'

const Summary = (props) =>  {
   const {originalPriceSum, discountPriceSum} = props;
   const totalSummary = originalPriceSum() - discountPriceSum()
   const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
  
   const config = {
    reference: (new Date()).getTime().toString(),
    email: "olukaisaac@gmail.com",
    amount: totalSummary > 0?  totalSummary * 100 : 0,
    publicKey: 'pk_test_469aa0e95eef18322cd1be290b3d2aeed089d350',
};

const initializePayment = usePaystackPayment(config);

const onSuccess = (reference) => {
  console.log({...reference, time : new Date()});
  setIsLoading(false);
  //history.push('/')
};

const onClose = () => {
  // history.goBack()
  // console.log('closed')
}


const handleClick = () => {
  setIsLoading(true);
  initializePayment(onSuccess, onClose)
  ///setIsLoading(false);
}

  return (
    <div>
      <div className='summary'>
        <div className='heading'>
          <p>Summary</p>
        </div>
        <div className='details'>
          <div className='price'>
            <p>Original Price</p>
            <p>Discount Price</p>
          </div>
          <div className='amount'>
              <p>₦{originalPriceSum()}.00</p>
            <p>-₦{discountPriceSum()}.00</p>
          </div>
        </div>
        <hr/>
        <div className='total'>
          <p>Total</p>
          <p>₦{totalSummary}.00</p>
        </div>
        <div className='payment-notice'>
          <p>By completing your purchase, you agree with the <span> terms and condition </span></p>
        </div>
        <div className='payment-button'>
          <button 
          onClick={handleClick}>
            {isLoading ? 
              <CircularProgress isIndeterminate size="22px" color="teal" />
              : 'Complete payment'}
            </button>
        </div>  
      </div>
    </div>
  );
}

export default Summary;