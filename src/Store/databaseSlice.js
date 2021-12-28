import { createSlice } from '@reduxjs/toolkit';


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
		purchasedItem: [
			// {
			// 	id : 1,
			// 	thumbNail: '',
			// 	Title: 'Here is the title of this course',
			// 	Duration: '11.47secs',
			// 	Rating: {
			// 		rate: 4.5,
			// 		likes:  147256,
			// 		stars: <Stars/>,
			// 	},
			// 	Price : {
			// 		oldPrice : 87.99,
			// 		newPrice : 15.99
			// 	}
			// },
		
			// {
			// 	id : 2,
			// 	thumbNail: '',
			// 	Title: 'Here is the title of the second course',
			// 	Duration: '15.47secs',
			// 	Rating: {
			// 		rate: 4.0,
			// 		likes:  157256,
			// 		stars: <Stars/>,
			// 	},
			// 	Price : {
			// 		oldPrice : 85.99,
			// 		newPrice : 17.99
			// 	}
			// },
			// {
			// 	id : 3,
			// 	thumbNail: '',
			// 	Title: 'Here is the title of the second course',
			// 	Duration: '15.47secs',
			// 	Rating: {
			// 		rate: 4.0,
			// 		likes:  157256,
			// 		stars: <Stars/>,
			// 	},
			// 	Price : {
			// 		oldPrice : 85.99,
			// 		newPrice : 17.99
			// 	}
			// },
			// {
			// 	id : 4,
			// 	thumbNail: '',
			// 	Title: 'Here is the title of the second course',
			// 	Duration: '15.47secs',
			// 	Rating: {
			// 		rate: 4.0,
			// 		likes:  157256,
			// 		stars: <Stars/>,
			// 	},
			// 	Price : {
			// 		oldPrice : 85.99,
			// 		newPrice : 17.99
			// 	}
			// },
			// {
			// 	id : 5,
			// 	thumbNail: '',
			// 	Title: 'Here is the title of the second course',
			// 	Duration: '15.47secs',
			// 	Rating: {
			// 		rate: 4.0,
			// 		likes:  157256,
			// 		stars: <Stars/>,
			// 	},
			// 	Price : {
			// 		oldPrice : 85.99,
			// 		newPrice : 17.99
			// 	}
			// }
		],
}


const databaseSlice = createSlice({
   name: 'DatabaseSlice',
   initialState,
   reducers : {
    updatePurchasedItem(state, action){
			state.cartList = action.payload
		},
	  updateCartList(state, action){
			state.cartList = action.payload
		},
   }
})


export const { updateCartList, updatePurchasedItem } = databaseSlice.actions

export default databaseSlice.reducer
