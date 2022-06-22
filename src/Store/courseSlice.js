import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../Component/Apis/api';
import { apiKey } from '../Component/Apis/apiKey';


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
          // new Date(data.snippet.publishedAt).getDate() + '0'
          newPrice: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0'),
          oldPrice: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0') + 30,
          bestSelling: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0') > 160 ? true:false
        }
      }))
     return finalResult
  }
)


export const fetchAsyncCategories = createAsyncThunk('selectedCategory/fetchAsyncCategories', async (categoriesId, {rejectWithValue}) => {
  try{
    const response = await api
    .get(`/playlistItems?part=snippet&part=id&maxResults=20&playlistId=${categoriesId}&key=${apiKey}`) 
     const result = response.data.items
     //  Adding videoId to each course object
    const finalResult  = Object.assign(result.map(item => {
      return {
        ...item,
        videoId: item.snippet.resourceId.videoId,
        position: item.snippet.position + 1,
        newPrice: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0'),
        oldPrice: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0') + 30,
        bestSelling: Math.floor(new Date(item.snippet.publishedAt).getDate() + '0') > 160 ? true:false
      }
    }))
   return finalResult
  }
  catch(error){
    console.log(error)
    return rejectWithValue(error)
  } 
  }
)

export const fetchAsyncSelectedCourses = createAsyncThunk('selectedCourses/fetchAsyncSelectedCourses', async (id) => {
  const response = await api
    .get(`videos?part=snippet&part=contentDetails&part=id&part=player&part=topicDetails&part=statistics&id=${id}&maxResults=5&key=${apiKey}`)
    return (response.data.items)
  }
)


// initializing the state in this slide
const initialState = {
  isLoading: false,
  status: 'idle',
  errorMessage: '',
  courses: [],
  selectedCategory: [],
  selectedCourse: [],
}

 const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers : {
   
    updateLoading(state, action){
      state.isLoading = action.payload
    },
    updateStatus(state, action){
      state.status = action.payload
    }
	},

  
  extraReducers: {
    [fetchAsyncCourses.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchAsyncCourses.fulfilled]: (state, {payload}) => {
      return {...state,
         courses: payload,
         status: 'fufilled'
        }
    }, 
    [fetchAsyncCourses.rejected]: (state, action) => {
      state.status = 'rejected'
     //state.errorMessage = action.payload.message
    },




    // fetchAsyncCourses
    [fetchAsyncCategories.pending]: (state, action) => {
      console.log('pending')
      state.status = 'pending'
    },

    [fetchAsyncCategories.fulfilled]: (state, {payload}) => {
      return {...state, 
        selectedCategory: payload,
        status: 'fufilled'
      }
    },
    [fetchAsyncCategories.rejected]: (state, action) => {
      console.log('rejected')
     state.status = 'rejected'
     //state.errorMessage = action.payload.message
    },



    // fetchAyncSelectedCourses
    [fetchAsyncSelectedCourses.fulfilled]: (state, {payload}) => {
      console.log('Fetched selectedCourses Successfully')
      return {...state, selectedCourse: payload}
    }
  }
})


export const {updateLoading, updateStatus} = courseSlice.actions
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
 