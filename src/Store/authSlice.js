import { createSlice } from '@reduxjs/toolkit';



const initialState = {
 users : [],
 currentUser: {},
 userLoggedin: true,
}


const authSlice = createSlice({
   name: 'Authentication',
   initialState,
   reducers : {
      updateLoginState(state, action){
         state.userLoggedin = action.payload
     },
     updateCurrentUser(state, action){
        state.currentUser = action.payload
       },
     updateUsers(state, action){
        state.users = action.payload
    },
   }
})


export const { updateCurrentUser, updateUsers, updateLoginState } = authSlice.actions
//export const getLoginState = (state) => state.rootReducer.authSlice.userLoggedin


export default authSlice.reducer
