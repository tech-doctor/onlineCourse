import React from 'react';
import PaymentCard from 'react-payment-card-component'

const  DebitCard = () => {
	return (
		<div>
			<PaymentCard
				bank="nubank"
				model="normal"
				type="gold"
				brand="mastercard"
				number="408 408 408 408 408 1"
				cvv="408"
				holderName="Oluka Isaac"
				expiration="12/22"
				flipped={false}
			/>
		</div>
	);
}

export default DebitCard;