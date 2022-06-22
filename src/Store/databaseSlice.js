import { createSlice } from '@reduxjs/toolkit';

 export const initialState = {
	cartList : [
		    {
      kind: 'youtube#activity',
      etag: 'HuN_OrDhoVJO5FkcG7fsRTO3izo',
      id: 'MTUxNjQ1NDI5NTAxMTY0NTQyOTUwMTAwMDQ1OQ',
      snippet: {
        publishedAt: '2022-02-21T07:45:01+00:00',
        channelId: 'UCzroHLKLlfA-hR7S4if6qww',
        title: '02 AceCoinPay Form Design HTML/CSS/SCSS Tutorial',
        description: 'Links below...\ngoogle font: https://fonts.google.com/specimen/Poppins?query=pop\n\nSource Code:\nNO WORRY, AFTER THE FINAL VIDEO, GITHUB LINK TO THE SOURCE CODE GO SHOW HERE.\n\nFiles:\nhttps://drive.google.com/file/d/1ApAnJ0G8DJgE4c5HWBJyvpYXUgEzhRIZ/view?usp=sharing\n\nFollow me on:\nTwitter: https://twitter.com/the_bigtank\nInstagram: https://www.instagram.com/the_bigtank/\nGithub: https://github.com/thebigtank\n\n#programming #website #design',
        thumbnails: {
          'default': {
            url: 'https://i.ytimg.com/vi/hFIDBPxsD_Y/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hFIDBPxsD_Y/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/hFIDBPxsD_Y/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Doublesouth',
        type: 'upload'
      },
      contentDetails: {
        upload: {
          videoId: 'hFIDBPxsD_Y'
        }
      },
      videoId: 'hFIDBPxsD_Y',
      newPrice: 210,
      oldPrice: 240,
      bestSelling: true
    },
    {
      kind: 'youtube#activity',
      etag: 'qcoeUvL7vCBOOBpVmQOFRFdsuQY',
      id: 'MTUxNTg3OTc2NTk2MTU4Nzk3NjU5NjAwMDI5NA',
      snippet: {
        publishedAt: '2020-04-27T08:36:36+00:00',
        channelId: 'UCzroHLKLlfA-hR7S4if6qww',
        title: '006 - Javascript For Beginners - if and else statement',
        description: 'Follow me on Social media:\nTwitter- https://twitter.com/der_kaiser_\nInstagram- https://www.instagram.com/the_bigtank/\nFacebook- https://www.facebook.com/codeplay.eitse\n\nLike my Facebook Page- https://www.facebook.com/Double-South-2237731249788866/\n\nLinks:\nCSS Tutorial Series - https://www.youtube.com/playlist?list=PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2\nHTML Tutorial Series - https://www.youtube.com/playlist?list=PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK\nvwegba interiors website design tutorial - https://www.youtube.com/playlist?list=PLEu7Y7_blvLUvpUQDLqXn8N2gv6EMzG9R',
        thumbnails: {
          'default': {
            url: 'https://i.ytimg.com/vi/XY-bgn8oA_A/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/XY-bgn8oA_A/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/XY-bgn8oA_A/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/XY-bgn8oA_A/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/XY-bgn8oA_A/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'Doublesouth',
        type: 'upload'
      },
      contentDetails: {
        upload: {
          videoId: 'XY-bgn8oA_A'
        }
      },
      videoId: 'XY-bgn8oA_A',
      newPrice: 270,
      oldPrice: 300,
      bestSelling: true
    },
	],
	checkoutList : [],
	purchasedItem: [],
}

const currentDate = () => {
	const event = new Date();
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const date = event.toLocaleDateString(undefined, options);
	return date
}

const databaseSlice = createSlice({
   name: 'DatabaseSlice',
   initialState,
   reducers : {
	    updateCartList(state, action){
		  //Generate a unique id for each item in the cart based on the title
		  const eachId = "i" + btoa(action.payload.snippet.title);
		  const listIndex = state.cartList.findIndex(item => item.snippet.title === action.payload.snippet.title);
			console.log(listIndex)
			if(listIndex === -1){
			  state.cartList.push({...action.payload,  eachId})
		    }
			else{
			   console.log('item already in cart')
			}	
		},
		updateCheckoutList(state, action){
		   state.checkoutList.push({...action.payload})
		},
		updateTotalCheckoutList(state, action){
          state.checkoutList.push({...action.payload})
		},

		updatePurchasedItem(state, action){
			state.purchasedItem.push({...action.payload, purchasedTime: currentDate()})
		  },
   }
})


export const { updateCartList, updatePurchasedItem, updateCheckoutList, updateTotalCheckoutList } = databaseSlice.actions


export default databaseSlice.reducer
