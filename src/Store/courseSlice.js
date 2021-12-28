import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../Component/Apis/api'
import { apiKey } from '../Component/Apis/apiKey'

 export const fetchAsyncCourses = createAsyncThunk('courses/fetchAsyncCourses', async () => {
  const response = await api
    .get(`/activities?part=snippet%2CcontentDetails%2Cid&channelId=UCzroHLKLlfA-hR7S4if6qww&maxResults=15&key=${apiKey}`)
    return shuffle(response.data.items)
  }
)

export const fetchAsyncCategories = createAsyncThunk('selectedCategory/fetchAsyncCategories', async () => {
  const response = await api
    .get(`/playlistItems?part=snippet&part=id&maxResults=20&playlistId=PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI&key=${apiKey}`)
    return response.data.items
  }
)





const initialState = {
  isLoading: false,
  courses: [],
 
    selectedCategory: [],
		selectedCourse: null,
}


 const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers : {
    updateSelectedCourse(state, action){
	    state.selectedCourse = action.payload
    },
    updateSelectedCategories(state, action){
	    state.selectedCourse = action.payload
    },
    updateLoading(state, action){
      state.isLoading= action.payload
    },
	},
  extraReducers: {
    ///fetchAsyncCourses
    //when pending
    [fetchAsyncCourses.pending]: () => {
      console.log('pending')
    },
    //when fulfilled
    [fetchAsyncCourses.fulfilled]: (state, {payload}) => {
      console.log('Fetched Successfully')
      return {...state, courses: payload}
    }, 
    //when rejected
    [fetchAsyncCourses.rejected]: () => {
      console.log('rejected')
    },




    // fetchAsyncCourses
    [fetchAsyncCategories.fulfilled]: (state, {payload}) => {
      console.log('Fetched categories Successfully')
      return {...state, selectedCategory: payload}
    },
  }
})


export const { updateLoading, updateSelectedCourse, updateSelectedCategories} = courseSlice.actions
export const getAllcourses = (state) => state.rootReducer.courseSlice.courses;
export const getSelectedCategory = (state) => state.rootReducer.courseSlice.selectedCategory;
export default courseSlice.reducer






//Function that shuffles the array element.
const  shuffle = (arr) => {
  let arrLength = arr.length;
  let temp;
  let index;	
  while (arrLength > 0) {
    index = Math.floor(Math.random() * arrLength);
    arrLength--;
    temp = arr[arrLength];
    arr[arrLength] = arr[index];
    arr[index] = temp;
  }
  return arr;
}
 