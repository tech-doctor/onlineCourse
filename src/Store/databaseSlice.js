import { createSlice } from '@reduxjs/toolkit';
//import { useSelector } from 'react-redux';


 export const initialState = {
	cartList : [],
	checkoutList : [],
	purchasedItem: [],
}

const currentDate = () => {
	const event = new Date();
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const date = event.toLocaleDateString(undefined, options);
	return date
}


const databaseSlice = createSlice({
   name: 'DatabaseSlice',
   initialState,
   reducers : {
	  updateCartList(state, action){
		  //Generate a unique id for each item in the cart based on the title
		  const eachId = "i" + btoa(action.payload.snippet.title);
		  const listIndex = state.cartList.findIndex(item => item.snippet.title === action.payload.snippet.title);
			console.log(listIndex)
			if(listIndex === -1){
			 state.cartList.push({...action.payload,  eachId})
		  }
			else{
				console.log('item already in cart')
			}	
		},
		updateCheckoutList(state, action){
			state.checkoutList.push({...action.payload})
		},
		updateTotalCheckoutList(state, action){
        state.checkoutList.push({...action.payload})
		},

		updatePurchasedItem(state, action){
			state.purchasedItem.push({...action.payload, purchasedTime: currentDate()})
		  },
   }
})


export const { updateCartList, updatePurchasedItem, updateCheckoutList, updateTotalCheckoutList } = databaseSlice.actions


export default databaseSlice.reducer
