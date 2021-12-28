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
     updateCurrentUser(state, action){
        state.currentUser = action.payload
       },
     updateUsers(state, action){
        state.users = action.payload
    },
   }
})


export const { updateCurrentUser, updateUsers } = authSlice.actions

export default authSlice.reducer
