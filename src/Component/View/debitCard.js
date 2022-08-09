import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { capitalize } from '../Account';
import PaymentCard from 'react-payment-card-component'

const  DebitCard = () => {
  const [flipped, setFlipped] = useState(false);
  const currentUser = useSelector(state => state.rootReducer.authSlice.currentUser);

  const handleClick = () => {
    console.log('clicked')
    setFlipped(!flipped)
  }

  if(currentUser === null){
    return null;
  }
 
  const {firstname, lastname} = currentUser;
  
	return (
    <div onClick={handleClick}>
     <PaymentCard
      bank="santander"
      model="normal"
      //type="gold"
      brand="mastercard"
      number="408 408 408 408 408 1"
      cvv="408"
      holderName={`${capitalize(firstname)} ${capitalize(lastname)}`}
      expiration="12/22"
      flipped={flipped}
    />
    </div>  
	);
}

export default DebitCard;