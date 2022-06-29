import React, {useState} from 'react';
import { usePaystackPayment } from 'react-paystack';
import { CircularProgress } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePurchasedItem } from '../../Store/databaseSlice';
import { public_key } from '../../Component/Apis/apiKey';

const Summary = () =>  {
  const dispatch = useDispatch();
  const checkoutList = useSelector(state => state.rootReducer.databaseSlice.checkoutList);
  const [isLoading, setIsLoading] = useState(false);

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

  const totalSummary = originalPriceSum() - discountPriceSum();
  const totalAmount = totalSummary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "olukaisaac@gmail.com",
    amount: totalSummary > 0?  totalSummary * 100 : 0,
    publicKey: public_key,
  };

const initializePayment = usePaystackPayment(config);

const onSuccess = (reference) => {
  console.log({...reference});
  setIsLoading(false);
  checkoutList.map(data => {
    dispatch(updatePurchasedItem(data))
})  
};

const onClose = () => {
  setIsLoading(false);
}

const handleClick = () => {
  setIsLoading(true);
  initializePayment(onSuccess, onClose);
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
            <p>Discount</p>
          </div>
          <div className='amount'>
            <p>₦{originalPriceSum()}.00</p>
            <p>-₦{discountPriceSum()}.00</p>
          </div>
        </div>
        <div className='total'>
          <p>TOTAL</p>
          <p className='total_price'>₦{totalAmount}.00</p>
        </div>
        <div className='payment-notice'>
          <p>*By completing your purchase, you agree with the <span><a href='id'>terms and conditions</a></span></p>
        </div>   
      </div>
      <div className='payment-button'>
          <button 
          onClick={handleClick}>
            {isLoading ? 
              <CircularProgress isIndeterminate size="22px" color="teal" />
              : <>
              <span>Complete payment</span>
              <span> &#187;</span>
              </>}
            </button>
        </div> 
    </div>
  );
}

export default Summary;