import { createSlice } from '@reduxjs/toolkit';

 export const initialState = {
	cartList : [],
	checkoutList : [],
	purchasedItem: [
    {
      kind: 'youtube#activity',
      etag: 'pTOoURtQkLcKRTdd_0h_ZjZOE3o',
      id: 'MTUxNjQ0NzUzNTIzMTY0NDc1MzUyMzAwMDc1Nw',
      snippet: {
        publishedAt: '2022-02-13T11:58:43+00:00',
        channelId: 'UCzroHLKLlfA-hR7S4if6qww',
        title: '05 Design Productivity Dashboard HTML/CSS Tutorial',
        description: 'Links below...\ngoogle font: https://fonts.google.com/specimen/Kumbh+Sans?query=kumb\n\nAssets:\nhttps://github.com/thebigtank/productivity-dashboard-tutorial\n\nFollow me on:\nTwitter: https://twitter.com/the_bigtank\nInstagram: https://www.instagram.com/the_bigtank/\nGithub: https://github.com/thebigtank\n\nUI Design:\nDesign :https://www.behance.net/gallery/130419897/Productivity-Dashboard-Design\nDesigner: https://www.behance.net/romanivanov12\n\n#programming #website #design',
        thumbnails: {
          'default': {
            url: 'https://i.ytimg.com/vi/HFUbVpgQvOg/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HFUbVpgQvOg/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/HFUbVpgQvOg/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Doublesouth',
        type: 'upload'
      },
      contentDetails: {
        upload: {
          videoId: 'HFUbVpgQvOg'
        }
      },
      videoId: 'HFUbVpgQvOg',
      newPrice: 130,
      oldPrice: 160,
      bestSelling: false
    },
    {
      kind: 'youtube#activity',
      etag: 'UiGdGcFOkNCxmnNx8mI1qafn2QE',
      id: 'MTUxNjQ0NzY0MTQ1MTY0NDc2NDE0NTAwMDQwOA',
      snippet: {
        publishedAt: '2022-02-13T14:55:45+00:00',
        channelId: 'UCzroHLKLlfA-hR7S4if6qww',
        title: '07 Design Productivity Dashboard HTML/CSS Tutorial (Final)',
        description: 'Links below...\ngoogle font: https://fonts.google.com/specimen/Kumbh+Sans?query=kumb\n\nAssets:\nhttps://github.com/thebigtank/productivity-dashboard-tutorial\n\nFollow me on:\nTwitter: https://twitter.com/the_bigtank\nInstagram: https://www.instagram.com/the_bigtank/\nGithub: https://github.com/thebigtank\n\nUI Design:\nDesign :https://www.behance.net/gallery/130419897/Productivity-Dashboard-Design\nDesigner: https://www.behance.net/romanivanov12\n\n#programming #website #design',
        thumbnails: {
          'default': {
            url: 'https://i.ytimg.com/vi/AiH5_xTVtp8/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/AiH5_xTVtp8/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/AiH5_xTVtp8/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Doublesouth',
        type: 'upload'
      },
      contentDetails: {
        upload: {
          videoId: 'AiH5_xTVtp8'
        }
      },
      videoId: 'AiH5_xTVtp8',
      newPrice: 130,
      oldPrice: 160,
      bestSelling: false
    },
    {
      kind: 'youtube#activity',
      etag: 'VPRiWansO477zC9l-7dI4rPGxXA',
      id: 'MTUxNTkxODcyNDM2MTU5MTg3MjQzNjAwMDA4OA',
      snippet: {
        publishedAt: '2020-06-11T10:47:16+00:00',
        channelId: 'UCzroHLKLlfA-hR7S4if6qww',
        title: 'Got Miracles UI HTML / CSS / GSAP Animation Tutorial  - Part 2',
        description: 'Follow me on Social media:\nTwitter- https://twitter.com/the_bigtank\nInstagram- https://www.instagram.com/the_bigtank/\nFacebook- https://www.facebook.com/codeplay.eitse\n\nLink to codes and files: https://github.com/thebigtank/Got-Miracles-UI\n\nLike my Facebook Page- https://www.facebook.com/Double-South-2237731249788866/\n\n\nLinks:\nEmmet Tutorial: https://youtu.be/5KctnODbk8w\n\nCSS Tutorial Series - https://www.youtube.com/playlist?list=PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2\nHTML Tutorial Series - https://www.youtube.com/playlist?list=PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK\nGoogle fonts- https://fonts.google.com/\nBrowser reset- https://meyerweb.com/eric/tools/css/reset/\nION Icons - https://ionicons.com/\n\n\nUI Inspiration: https://dribbble.com/shots/5978511-Daily-UI-Super-Dark-Mode',
        thumbnails: {
          'default': {
            url: 'https://i.ytimg.com/vi/Pap0LjAJ2hI/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Pap0LjAJ2hI/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/Pap0LjAJ2hI/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/Pap0LjAJ2hI/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/Pap0LjAJ2hI/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'Doublesouth',
        type: 'upload'
      },
      contentDetails: {
        upload: {
          videoId: 'Pap0LjAJ2hI'
        }
      },
      videoId: 'Pap0LjAJ2hI',
      newPrice: 110,
      oldPrice: 140,
      bestSelling: false
    },
  ],
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
			//console.log(listIndex)
			if(listIndex === -1){
			  state.cartList.push({...action.payload,  eachId})
		    }
			else{
			   console.log('item already in cart')
			}	
		},
    removeItem(state, action){
      const listIndex = state.cartList.findIndex(item => item.snippet.title === action.payload.snippet.title);
      //state.cartList.splice(listIndex, 1);
       if(listIndex !== -1){
        state.cartList.splice(listIndex, 1);
      }
      //console.log(listIndex)
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


export const { updateCartList, updatePurchasedItem, updateCheckoutList, updateTotalCheckoutList, removeItem } = databaseSlice.actions


export default databaseSlice.reducer
