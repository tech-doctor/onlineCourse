import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../Component/Apis/api';

const currentUser = localStorage.getItem('current_user');

const token = localStorage.getItem('token');


export const login = createAsyncThunk('authSlice/login', async (data, thunkAPI) => {
  try{
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    return result;
  }
  catch(error){
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong, try again!'
    });
  }
})


export const signup = createAsyncThunk('authSlice/signup', async ( data,thunkAPI) => {
  try{
    const response = await fetch (`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
     return thunkAPI.rejectWithValue({
      message: 'Something went wrong, try again!'
     });
  }
})

export const removefromStorage =  () => {
  localStorage.removeItem('current_user');
  localStorage.removeItem('token');
  //localStorage.removeItem('cart_public_id');
  localStorage.removeItem('cart_count');
}

const initialState = {
 isLoading: false,
 userLoggedin: token? true : false,
 fetchStatus: 'idle',
 message: '',
 currentUser: currentUser? JSON.parse(currentUser) : null,
}


const authSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers : {
    reset (state) {
      state.fetchStatus = 'idle';
      state.message = '';
    },
    logout (state) {
      removefromStorage();
      state.currentUser = null;
      state.userLoggedin = false;
    }
  },
  extraReducers: {
    //Login actions
    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.fetchStatus = 'pending';  
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fetchStatus = 'fulfilled';
      if(action.payload?.token){
        localStorage.setItem ('token', action.payload.token);
        localStorage.setItem('current_user', JSON.stringify(action.payload.user));
        //createCart(action.payload.token);
        state.userLoggedin = true;
        state.currentUser = action.payload.user;
      }
      else{
        state.userLoggedin = false;
        state.message = action.payload.message; 
      }
    },
    [login.rejected]: (state, action) => {
      console.log('rejected')
      state.isLoading = false;
      state.fetchStatus = 'rejected';
      state.message = 'Something went wrong, try again!';
    },

    


    //Signup actions
    [signup.pending]: (state, action) => {
      state.isLoading = true;
      state.fetchStatus = 'pending';  
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fetchStatus = 'fulfilled';

      if(action.payload?.token){
        localStorage.setItem ('token', action.payload.token);
        localStorage.setItem('current_user', JSON.stringify(action.payload.user));
        localStorage.setItem('cart_count', JSON.stringify(0));
        createCart(action.payload.token);
        state.userLoggedin = true;
        state.currentUser = action.payload.user;
      }
      else if(action.payload?.code === "E003"){
        state.message = 'Field(s) does not meet the requirements';
      }
      
      else{
        state.userLoggedin = false;
        state.message = action.payload?.message; 
      }
    },
    [signup.rejected]: (state, action) => {
      console.log('rejected')
      state.isLoading = false;
      state.fetchStatus = 'rejected';
      state.message = 'Something went wrong, try again!';
    }
  }
})


function createCart(token){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
};

fetch(`${BASE_URL}/carts`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    localStorage.setItem ('cart_public_id', result.id);
    localStorage.setItem('cart_count', 0);
  })
  .catch(error => console.log('error', error));
}




export const { reset, logout } = authSlice.actions;
export const  getCurrentUser  = (state) => state.rootReducer.authSlice.currentUser;



export default authSlice.reducer;
