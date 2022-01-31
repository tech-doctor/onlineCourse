import  { configureStore,combineReducers } from '@reduxjs/toolkit';
import courseSlice from './courseSlice';
import authSlice from './authSlice';
import databaseSlice from './databaseSlice';




const rootReducer = combineReducers({courseSlice, authSlice, databaseSlice})

const store = configureStore({
    reducer: {
      rootReducer
    }
})




export default store