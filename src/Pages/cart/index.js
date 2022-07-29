import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import moment from 'moment';
import TotalCart from './totalCart';
import SimilarCourses from './similarCourses';
import CartItem from './cartItem';
import Layout from '../../Component/Layout';
import '../../Styles/cart.scss';


const  CartPage = ()  => {
  const history = useHistory();
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)
  //const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)

  const keepShopping = () => {
    history.push('./random')
  }

  //return data that has not being purchased as cartList

  // const cartListNotPurchased = cartList.filter(data => {
  //   return !purchasedItem.some(item => item.videoId === data.videoId)
  // }
  // )



	return (
		<div className ="cart">
     <Layout>
      <div className = "center_div">
        <div className='top'>
          {cartList.length !== 0 && 
          <div className = "title shopping_title">
           <p className='heading'>{`Shopping Cart (${cartList.length} ${cartList.length > 1? `courses`: `course`}`})</p>
           </div>
          } 
        <div className = "body">
          {cartList.length === 0?
          <div className = "empty-chart">
            <div className = "image">
              <img alt = "noChart" src = "../Assets/Empty-chart.png"/>
            </div>
            <div className = 'details'>
              <p>You have no cart at the moment</p>
              <button onClick={keepShopping}>Keep Shopping</button>
          </div> 
          </div> :  <div className = "cartList-Total">
            {cartList.map(data =>
              <CartItem 
                data = {data}
                key = {data.videoId}
                id = {data.videoId}
                imageAlt ={data.title}  
                imageSrc = {data.imageUrl}
                title = {data.title}
                date = {moment(data.publishedAt).fromNow()}
                newPrice = {data.newPrice}
                oldPrice = {data.oldPrice}
                bestSelling = {data.bestSelling}
              />
            )} 
            {cartList.length > 1 &&
              <TotalCart/>}
          </div>}
        </div>
        {cartList.length !== 0 &&  <div>
          <SimilarCourses/>
          </div>}
        </div>
      </div>
        <hr/>
      </Layout>   
		</div>
	)
}

export default CartPage
