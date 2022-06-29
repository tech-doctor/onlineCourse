import React,{useState} from 'react';
import PaymentCard from 'react-payment-card-component'

const  DebitCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    console.log('clicked')
    setFlipped(!flipped)
  }

	return (
    <div onClick={handleClick}>
     <PaymentCard
      bank="santander"
      model="normal"
      //type="gold"
      brand="mastercard"
      number="408 408 408 408 408 1"
      cvv="408"
      holderName="Oluka Isaac"
      expiration="12/22"
      flipped={flipped}
    />
    </div>  
	);
}

export default DebitCard;