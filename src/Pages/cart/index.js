import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {Stack, Skeleton} from "@chakra-ui/react";
import { getCartList } from '../../Store/databaseSlice';
import { getAllcourses, fetchAsyncCourses } from '../../Store/courseSlice';
import moment from 'moment';
import TotalCart from './totalCart';
import SimilarCourses from './similarCourses';
import CartItem from './cartItem';
import Layout from '../../Component/Layout';
import '../../Styles/cart.scss';


const  CartPage = ()  => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
  const cartData = useSelector(state => state.rootReducer.databaseSlice.cartList);
  const status1 = useSelector(state => state.rootReducer.databaseSlice.fetchStatus);
  //const [cartList, setCartList] = useState([])

  const keepShopping = () => {
    history.push('./random')
  }

  useEffect(() => {
    dispatch(fetchAsyncCourses());
    dispatch(getCartList());
  },[dispatch])

  let cartList  = []
  allCourses.forEach((courses) => {
    cartData.forEach(item => {
      if(courses.videoId === item.unique_id){
        cartList.push(courses)
      }
    })
  })


  console.log(cartList)

  //return data that has not being purchased as cartList
  // const cartListNotPurchased = cartList.filter(data => {
  //   return !purchasedItem.some(item => item.videoId === data.videoId)
  // }
  // )

  //dispatch(removeItem(data))
  
  const LoadingText = function courseBox (){
    return (
      <div className = "skeletonBox">
        <Stack>
        {cartData.map((data) => 
        <React.Fragment key = {data.unique_id}>
          <Skeleton height='85px' />
        </React.Fragment>
        )}
      </Stack>  
    </div>
    );
  }

	return (
		<div className ="cart">
     <Layout>
      <div className = "center_div">
        {<LoadingText/>}
        <div className='top'>
          {cartList.length !== 0 && 
          <div className = "title shopping_title">
           <p className='heading'>{`Shopping Cart (${cartList.length} ${cartList.length > 1? `courses`: `course`}`})</p>
           </div>
          }
        <div className = "body">
          {status1 !== 'pending' && cartList.length === 0?
          <div className = "empty-chart">
            <div className = "image">
              <img alt = "noChart" src = "../Assets/Empty-chart.png"/>
            </div>
            <div className = 'details'>
              <p>You have no cart at the moment</p>
              <button onClick={keepShopping}>Keep Shopping</button>
          </div> 
          </div> :  <div className = "cartList-Total">
            {cartList?.map(data =>
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
              <TotalCart
                cartList = {cartList}
              />}
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
