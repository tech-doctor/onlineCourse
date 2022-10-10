import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import { CircularProgress } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePurchasedItem,resetCheckoutList,resetCartList } from '../../Store/databaseSlice';
import { public_key } from '../../Component/Apis/apiKey';

const Summary = () =>  {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.rootReducer.authSlice.currentUser);
  const checkoutList = useSelector(state => state.rootReducer.databaseSlice.checkoutList);
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  const [isLoading, setIsLoading] = useState(false);

  const originalPriceSum = () => {
    let sum  = 0
    checkoutList?.forEach (data => {
      sum += Math.floor(new Date(data.publishedAt).getDate() + '0') + 30
    })
     return sum 
  }

  const discountPriceSum = () => {
    let sum  = 0
    checkoutList?.forEach (data => {
      sum += Math.floor(new Date(data.publishedAt).getDate() + '0')
    })
     return originalPriceSum() - sum
  }

  const totalSummary = originalPriceSum() - discountPriceSum();
  const totalAmount = totalSummary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const config = {
    reference: (new Date()).getTime().toString(),
    email: currentUser?.email,
    amount: totalSummary > 0?  totalSummary * 100 : 0,
    publicKey: public_key,
  };
  const cartListNotPurchased = cartList.filter(data => {
    return !purchasedItem.some(item => item.videoId === data.videoId)
  })

const initializePayment = usePaystackPayment(config);

const onSuccess = (reference) => {
  //console.log({...reference});
  setIsLoading(false);
  dispatch(resetCartList())
  // cartListNotPurchased.forEach(data => {
  //   dispatch(updateCartList(data))
  // })
  history.goBack();
  checkoutList.map(data => {
    dispatch(updatePurchasedItem(data))
}) 
  dispatch(resetCheckoutList())  
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