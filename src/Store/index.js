import  { configureStore } from '@reduxjs/toolkit'
import cartReducer from './mySlice'

const store = configureStore({
    reducer: {
       myState: cartReducer
    }
})

export default store