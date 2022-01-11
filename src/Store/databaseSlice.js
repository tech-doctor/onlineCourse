import { createSlice } from '@reduxjs/toolkit';
///import { uuid } from uuidv4();
import  uuid  from 'uuid/dist/v4'


const initialState = {
    cartList : [
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

//console.log(uuid())

const databaseSlice = createSlice({
   name: 'DatabaseSlice',
   initialState,
   reducers : {
    updatePurchasedItem(state, action){
			state.cartList = action.payload
		},
	  updateCartList(state, action){
		//   const listIndex = state.cartList.findIndex(item => item.id === action.payload.id);
		//        console.log(listIndex)
		// 	   if(listIndex === -1){
				state.cartList.push({...action.payload, eachId: uuid()})
			//    }else{
			// 	   console.log('item already in cart')
			//    }
			
		},
   }
})


export const { updateCartList, updatePurchasedItem } = databaseSlice.actions

export default databaseSlice.reducer
