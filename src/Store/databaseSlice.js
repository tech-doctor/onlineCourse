import { createSlice } from '@reduxjs/toolkit';

 export const initialState = {
	cartList : [],
	checkoutList : [],
	purchasedItem: [
		{
			key: 'MTUxNjQyNTc4MzAwMTY0MjU3ODMwMDAwMDM0OQ',
			publishedAt: '2022-01-19T07:45:00+00:00',
			title: '03 Design Productivity Dashboard HTML/CSS Tutorial',
			imageUrl: 'https://i.ytimg.com/vi/HTtvtbWlQhU/hqdefault.jpg',
			videoId: 'HTtvtbWlQhU',
			newPrice: 190,
			oldPrice: 220,
			bestSelling: true,
			eachId: 'iMDMgRGVzaWduIFByb2R1Y3Rpdml0eSBEYXNoYm9hcmQgSFRNTC9DU1MgVHV0b3JpYWw=',
			purchasedTime: 'Sep 12, 2022'
		  },
		  {
			key: 'MTUxNTkwMDk0OTgwMTU5MDA5NDk4MDAwMDQzNQ',
			publishedAt: '2020-05-21T21:03:00+00:00',
			title: '009 - Javascript For Beginners - While Loops, For Loops',
			imageUrl: 'https://i.ytimg.com/vi/6NNDsi4oL4s/hqdefault.jpg',
			videoId: '6NNDsi4oL4s',
			newPrice: 210,
			oldPrice: 240,
			bestSelling: true,
			eachId: 'iMDA5IC0gSmF2YXNjcmlwdCBGb3IgQmVnaW5uZXJzIC0gV2hpbGUgTG9vcHMsIEZvciBMb29wcw==',
			purchasedTime: 'Sep 12, 2022'
		  },
		  {
			key: 'MTUxNjIxMzI1NjcwMTYyMTMyNTY3MDAwMDA4MA',
			publishedAt: '2021-05-18T08:14:30+00:00',
			title: 'Jamkey HTML/CSS Design Tutorial Part 3',
			imageUrl: 'https://i.ytimg.com/vi/MwqJlACYwKk/hqdefault.jpg',
			videoId: 'MwqJlACYwKk',
			newPrice: 180,
			oldPrice: 210,
			bestSelling: true,
			eachId: 'iSmFta2V5IEhUTUwvQ1NTIERlc2lnbiBUdXRvcmlhbCBQYXJ0IDM=',
			purchasedTime: 'Sep 12, 2022'
		  },
		  {
			key: 'MTUxNjA5ODQ0NDAxMTYwOTg0NDQwMTAwMDc2Nw',
			publishedAt: '2021-01-05T11:00:01+00:00',
			title: '04 Kenya HTML CSS Javascript GSAP Animation tutorial',
			imageUrl: 'https://i.ytimg.com/vi/avf0NcihPoA/hqdefault.jpg',
			videoId: 'avf0NcihPoA',
			newPrice: 50,
			oldPrice: 80,
			bestSelling: false,
			eachId: 'iMDQgS2VueWEgSFRNTCBDU1MgSmF2YXNjcmlwdCBHU0FQIEFuaW1hdGlvbiB0dXRvcmlhbA==',
			purchasedTime: 'Sep 12, 2022'
		  },
		  {
			key: 'MTUxNjA4MjQ2MDAzMTYwODI0NjAwMzAwMDc5MQ',
			publishedAt: '2020-12-17T23:00:03+00:00',
			title: '013 - Javascript For Beginners - Functions',
			imageUrl: 'https://i.ytimg.com/vi/FVydaMGQHQk/hqdefault.jpg',
			videoId: 'FVydaMGQHQk',
			newPrice: 180,
			oldPrice: 210,
			bestSelling: true,
			eachId: 'iMDEzIC0gSmF2YXNjcmlwdCBGb3IgQmVnaW5uZXJzIC0gRnVuY3Rpb25z',
			purchasedTime: 'Sep 12, 2022'
		  }
	],
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
