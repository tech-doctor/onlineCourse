 import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      cartList : [{
		id: 1,
		mainPrice: 20,
		discountPrice: 9.99
	  },
	  {
		id: 2,
		mainPrice: 18.89,
		discountPrice: 8.99
	  }
	],
      itemsBought: [],
      userLoggedin: true,
      selectedCourse: null,
}


 const mySlice = createSlice({
	name: 'myState',
	initialState,
	reducers : {
	  updateCartList(state, action){
			state.cartList = action.payload
		},
		// updateUserStatus(state, action){
		// 	state.userLoggedin = action.payload
    // },
    updateSelectedCourse(state, action){
	    state.selectedCourse = action.payload
    },
	}
})


export const { updateCartList, updateUserStatus, updateSelectedCourse } = mySlice.actions
 
export default mySlice.reducer
