import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import api from '../Component/Apis/api'
import { apiKey } from '../Component/Apis/apiKey'


 export const fetchAsyncCourses = createAsyncThunk('courses/fetchAsyncCourses', async () => {
  const response = await api
    .get(`/activities?part=snippet%2CcontentDetails%2Cid&channelId=UCzroHLKLlfA-hR7S4if6qww&maxResults=40&key=${apiKey}`)
    // const status = response.status
     const result = shuffle(response.data.items)
    //  Adding videoId to each course object
    const finalResult  = Object.assign(result.map(item => {
        return {
          ...item,
          videoId: item.contentDetails.upload.videoId,
          isPurchased: false,
        }
      }))
     return finalResult
  }
)



export const fetchAsyncCategories = createAsyncThunk('selectedCategory/fetchAsyncCategories', async (categoriesId) => {
  const response = await api
    .get(`/playlistItems?part=snippet&part=id&maxResults=20&playlistId=${categoriesId}&key=${apiKey}`)
     const result = response.data.items
     //  Adding videoId to each course object
    const finalResult  = Object.assign(result.map(item => {
      return {
        ...item,
        videoId: item.snippet.resourceId.videoId
      }
    }))
   return finalResult
  
    
  }
)

export const fetchAsyncSelectedCourses = createAsyncThunk('selectedCourses/fetchAsyncSelectedCourses', async (id) => {
  const response = await api
    .get(`videos?part=snippet&part=contentDetails&part=id&part=player&part=topicDetails&part=statistics&id=${id}&maxResults=5&key=${apiKey}`)
    return (response.data.items)
  }
)






const initialState = {
  isLoading: false,
  courses: [],
  selectedCategory: [],
  selectedCourse: [],
}

 const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers : {
    // updateSelectedCourse(state, action){
	  //   state.selectedCourse = action.payload
    // },
    updateLoading(state, action){
      state.isLoading = action.payload
    },

    //where i stopped
    updateIsPurchased(state, action){
      for(let i=0; i<state.courses.length; i++){
        if(state.courses[i].snippet.title === action.payload.snippet.title){
          state.courses[i].isPurchased = true;
          console.log(action.payload.isPurchased)
        }  else{
          console.log('not found')
        }
      }
    }
	},

  extraReducers: {
    ///fetchAsyncCourses
    [fetchAsyncCourses.pending]: () => {
      console.log('pending')
    },
    [fetchAsyncCourses.fulfilled]: (state, {payload}) => {
      console.log('Fetched Successfully')
      return {...state, courses: payload}
    }, 
    [fetchAsyncCourses.rejected]: () => {
      console.log('rejected')
    },




    // fetchAsyncCourses
    [fetchAsyncCategories.fulfilled]: (state, {payload}) => {
      console.log('Fetched categories Successfully')
      return {...state, selectedCategory: payload}
    },

    // fetchAyncSelectedCourses
    [fetchAsyncSelectedCourses.fulfilled]: (state, {payload}) => {
      console.log('Fetched selectedCourses Successfully')
      return {...state, selectedCourse: payload}
    }
  }
})


export const {updateLoading, updateIsPurchased} = courseSlice.actions
export const getAllcourses = (state) => state.rootReducer.courseSlice.courses;
export const getSelectedCategory = (state) => state.rootReducer.courseSlice.selectedCategory;
export const getSelectedCourse = (state) => state.rootReducer.courseSlice.selectedCourse;
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
 