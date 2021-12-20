 import { createSlice } from '@reduxjs/toolkit';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import  {faStar}  from '@fortawesome/free-solid-svg-icons';


	const Stars = () => {
		return(
			<span className = "rating-stars">
        <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			</span>
			)
	}

const initialState = {
  cartList : [{
		id: 1,
		mainPrice: 20,
		discountPrice: 9.99
	  },
	  {
		id: 2,
		mainPrice: 18.89,
		discountPrice: 8.99
	  }
	],
		itemsBought: [
			{
				id : 1,
				thumbNail: '',
				Title: 'Here is the title of this course',
				Duration: '11.47secs',
				Rating: {
					rate: 4.5,
					likes:  147256,
					stars: <Stars/>,
				},
				Price : {
					oldPrice : 87.99,
					newPrice : 15.99
				}
			},
		
			{
				id : 2,
				thumbNail: '',
				Title: 'Here is the title of the second course',
				Duration: '15.47secs',
				Rating: {
					rate: 4.0,
					likes:  157256,
					stars: <Stars/>,
				},
				Price : {
					oldPrice : 85.99,
					newPrice : 17.99
				}
			},
			{
				id : 3,
				thumbNail: '',
				Title: 'Here is the title of the second course',
				Duration: '15.47secs',
				Rating: {
					rate: 4.0,
					likes:  157256,
					stars: <Stars/>,
				},
				Price : {
					oldPrice : 85.99,
					newPrice : 17.99
				}
			},
			{
				id : 4,
				thumbNail: '',
				Title: 'Here is the title of the second course',
				Duration: '15.47secs',
				Rating: {
					rate: 4.0,
					likes:  157256,
					stars: <Stars/>,
				},
				Price : {
					oldPrice : 85.99,
					newPrice : 17.99
				}
			},
			{
				id : 5,
				thumbNail: '',
				Title: 'Here is the title of the second course',
				Duration: '15.47secs',
				Rating: {
					rate: 4.0,
					likes:  157256,
					stars: <Stars/>,
				},
				Price : {
					oldPrice : 85.99,
					newPrice : 17.99
				}
			}
		],
		userLoggedin: true,
		selectedCourse: null,
}


 const mySlice = createSlice({
	name: 'myState',
	initialState,
	reducers : {
	  updateCartList(state, action){
			state.cartList = action.payload
		},
		// updateUserStatus(state, action){
		// 	state.userLoggedin = action.payload
    // },
    updateSelectedCourse(state, action){
	    state.selectedCourse = action.payload
    },
	}
})


export const { updateCartList, updateUserStatus, updateSelectedCourse } = mySlice.actions
 
export default mySlice.reducer
