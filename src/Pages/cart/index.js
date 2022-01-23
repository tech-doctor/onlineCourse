import React from 'react'
//import { Link } from 'react-router-dom'
import {Stack} from "@chakra-ui/react"
import { useSelector} from 'react-redux'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/cart.scss'
import TotalCart from './totalCart'
import OtherCourses from './otherCourses'
import CartItem from './cartItem'
import moment from 'moment'
//import CartListSum from '../../Component/cartListSum'



const  CartPage = ()  => {
  //const dispatch = useDispatch()
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)

  
  const previousPriceSum = () => {
    let sum  = 0
    cartList.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30
    })
     return sum
  }

  const newPriceSum = () => {
    let sum  = 0
    cartList.forEach (data => {
      sum += Math.floor(new Date(data.snippet.publishedAt).getDate() + '0')
    })
    return sum
  }


  
	return (
		<div className ="cart">
      <div>
        <Header/>
      </div>
      <hr/>
      <div className = "center-div">
        <div className = "title">
          <h2 style ={{color: 'white'}}>Shopping Cart</h2>
        </div>
        <div style = {{margin: '50px 10%'}} className = "body">
          {/* If there is zero item on the cart, return this */}
          {cartList.length === 0?
          <div className = "empty-chart">
            <div className = "image">
              <img alt = "noChart" src = "../Assets/Empty-chart.png"/>
            </div>
            <div className = 'details'>
              <p>You have no cart at the moment</p>
              <button>Keep Shopping</button>
          </div> 
          </div> :  <div className = "cartList-Total">
            <div className = "skeleton">
              <Stack>
                {/* isLOaded will cancel out the effect when the content is loaded */}
                {/* <Skeleton height="200px" isLoaded>
                </Skeleton>
                <Skeleton height="200px" />
                <Skeleton height="200px" /> */}
              </Stack>
            </div>
          <div>
            { cartList.map(data =>
               <CartItem 
               data = {data}
                key = {data.id}
                id = {data.videoId}
                imageAlt ={data.snippet.title}  
                imageSrc = {data.snippet.thumbnails.high.url}
                title = {data.snippet.title}
                date = {moment(data.snippet.publishedAt).fromNow()}
                newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
                oldPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}
               />
               )} 
          </div>
          { cartList.length > 1?
          <div>
            <TotalCart
            previousPriceSum = {previousPriceSum}
            newPriceSum = {newPriceSum}
            />
          </div> : '' }
        </div>}
          <div>
            <OtherCourses/>
          </div>
        </div>
      </div>
        <hr/>
        <div>
          <Footer/>
        </div>
		</div>
	)
}

export default CartPage
