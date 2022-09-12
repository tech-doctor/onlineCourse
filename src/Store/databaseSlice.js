import { createSlice } from '@reduxjs/toolkit';

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
	    resetCheckoutList : (state) => {
			state.checkoutList = [];
		},
         resetCartList : (state) => {
			state.cartList = [];
		},
	    updateCartList(state, action){
		  //Generate a unique id for each item in the cart based on the title
		  const eachId = "i" + btoa(action.payload.title);
		  const listIndex = state.cartList.findIndex(item => item.title === action.payload.title);
			//console.log(listIndex)
			if(listIndex === -1){
			  state.cartList.push({...action.payload,  eachId})
		    }
			else{
			   console.log('item already in cart')
			}	
		},
    removeItem(state, action){
      const listIndex = state.cartList.findIndex(item => item.title === action.payload.title);
      //state.cartList.splice(listIndex, 1);
       if(listIndex !== -1){
        state.cartList.splice(listIndex, 1);
      }
      //console.log(listIndex)
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


export const { resetCheckoutList, resetCartList, updateCartList, updatePurchasedItem, updateCheckoutList, updateTotalCheckoutList, removeItem } = databaseSlice.actions


export default databaseSlice.reducer
