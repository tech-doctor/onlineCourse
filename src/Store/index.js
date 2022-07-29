import  { configureStore,combineReducers } from '@reduxjs/toolkit';
import courseSlice from './courseSlice';
import authSlice from './authSlice';
import databaseSlice from './databaseSlice';




const rootReducer = combineReducers({courseSlice, authSlice, databaseSlice})

const store = configureStore({
    reducer: {
      rootReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})




export default store