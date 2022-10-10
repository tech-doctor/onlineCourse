import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api, { BASE_URL} from '../Component/Apis/api';

const token = localStorage.getItem('token');
const cart_public_id = localStorage.getItem('cart_public_id');
const cartCount = localStorage.getItem('cart_count');

export const addToCart = createAsyncThunk('databaseSlice/addToCart', async (id, thunkAPI) => {
	try{
	  const response = await fetch(`${BASE_URL}/carts/${cart_public_id}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`,
		  'Access-Control-Allow-Origin': '*',
		  'mode': 'no-cors',
		  },
		body: JSON.stringify({
			"item_id": id
		})
	  })
	  const result = await response.json();
	  console.log(result)
	  return result;
	}
	//if status === 406, code == E104, message == "Session expired, you need to login"
	//
	catch(error){
	  return thunkAPI.rejectWithValue({
		message: 'Something went wrong, try again!'
	  });
	}
  })


  //GET CARTLIST
  export const getCartList = createAsyncThunk('databaseSlice/getCartList', async (data, thunkAPI) => {
    try{
      const response = await api.get(`${BASE_URL}/carts/${cart_public_id}`) 
      const result = response.data;
      const status = response.status;
     return {
      result,status 
    }
    }
    catch(error){
      console.log(error)
      return thunkAPI.rejectWithValue({
        message: 'Something went wrong, try again!'
      })
    } 
  })


  export const removeFromCart = createAsyncThunk('databaseSlice/removeFromCart', async (id, thunkAPI) => {
    try{
      const response = await fetch(`${BASE_URL}/carts/${cart_public_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors',
        },
      body: JSON.stringify({
        "item_id": id
      })
      })
      const result = await response.json();
      console.log(result)
      return result;
    }
    catch(error){
      return thunkAPI.rejectWithValue({
      message: 'Something went wrong, try again!'
      });
    }
    })
  

 export const initialState = {
	fetchStatus: 'idle',
	message:'',
	cartList : [],
  cartCount: cartCount? JSON.parse(cartCount): 0,
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
	reset (state) {
		state.fetchStatus = 'idle';
		state.message = '';
	  },
	    resetCheckoutList : (state) => {
			state.checkoutList = [];
		},
      resetCartList : (state) => {
			state.cartList = [];
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
   },
  
   extraReducers: {
    [addToCart.pending]: (state) => {
      state.fetchStatus = 'pending';  
    },
    [addToCart.fulfilled]: (state, action) => {
      state.fetchStatus = 'fulfilled';
      if(action.payload?.status){
      //redirect to login page
      console.log('status')
      }
      else{
        localStorage.setItem('cart_count', action.payload.count);
        const cartCount = localStorage.getItem('cart_count');
        state.cartCount = cartCount? JSON.parse(cartCount): 0;
      }
    },
    [addToCart.rejected]: (state) => {
      console.log('rejected')
      state.fetchStatus = 'rejected';
      state.message = 'Something went wrong, try again!';
    },

    //GET CART
    [getCartList.pending]: (state) => {
       state.fetchStatus = 'pending';  
     },
     [getCartList.fulfilled]: (state, {payload}) => {
       state.fetchStatus = 'fulfilled';
       if(payload?.status === 200){
        state.cartList = payload.result.items
       }
     },
     [getCartList.rejected]: (state) => {
       console.log('rejected');
       state.fetchStatus = 'rejected';
       state.message = 'Something went wrong, try again!';
     },


     //REMOVE FROM CART
     [removeFromCart.pending]: (state) => {
      state.fetchStatus = 'pending';  
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.fetchStatus = 'fulfilled';
      if(action.payload?.status){
      //redirect to login page
      console.log('status')
      }
      else{
        localStorage.setItem('cart_count', action.payload.count);
        const cartCount = localStorage.getItem('cart_count');
        state.cartCount = cartCount? JSON.parse(cartCount): 0;
      }
    },
    [removeFromCart.rejected]: (state) => {
      console.log('rejected')
      state.fetchStatus = 'rejected';
      state.message = 'Something went wrong, try again!';
    },
   } 
})


export const { reset, resetCheckoutList, resetCartList, updatePurchasedItem, updateCheckoutList, updateTotalCheckoutList, removeItem } = databaseSlice.actions;

export default databaseSlice.reducer
