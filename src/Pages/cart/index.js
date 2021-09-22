import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/cart.scss'
import TotalCart from './totalCart'
import OtherCourses from './otherCourses'
import { Link } from 'react-router-dom'
import { Spinner, Stack,Skeleton, SkeletonText} from "@chakra-ui/react"

const  cartPage = ()  => {

  const cartObj  = [
    {
      id: 1,
      mainPrice: 19,
      discountPrice: 9.99
    },
    {
      id: 2,
      mainPrice: 18.89,
      discountPrice: 8.99
    }
  ]

  
  const mainPriceSum = () => {
    let sum  = 0
    cartObj.forEach (price => {
      sum += price.mainPrice
    })
     return sum
  }


  const discountPriceSum = () => {
    let sum  = 0
    cartObj.forEach (price => {
      sum += price.discountPrice
    })
    return sum

  }
  

  const CartList = function cartList() {
    return (
      <div>
      { cartObj.map ((data,  index) => 
        (<div key = {data.id}  className = "cartList">
            <Link style = {{textDecoration: 'none', color: 'black'}} to = 'courses/course-selected'>
            <div className = "left">
              <div className ="image">
                <img  alt = "" src = "../Assets/React-frontend.jpg"/>
              </div>
              <div className = 'title-details'>
                <p>TITLE</p>
                <p>Little details</p>
              </div>
            </div>
            </Link> 
            <div className ="right">
              <div  className = "remove">
                <span>X</span>
              </div>
              <div className = "price-tag">
                <p>${data.discountPrice}</p>
                <p style = {{textDecoration: 'line-through'}}>${data.mainPrice}</p><br/>
                <button style = {{cursor: 'pointer'}}>BUY</button>
              </div>
            </div>
         
      </div>
       ))
      }
      </div>
    )
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
         
				<div className = "cartList-Total">
          <div className = "empty-chart">
            <div className = "image">
            <img alt = "noChart" src = "../Assets/Empty-chart.png"/>
            </div>
            <div className = 'details'>
              <p>You have no cart at the moment</p>
              <button>Keep Shopping</button>
            </div>
           
          </div>
          <div className = "skeleton">
            <Stack>
              {/* isLOaded will cancel out the effect when the content is loaded */}
              <Skeleton height="200px" isLoaded>
              </Skeleton>
              <Skeleton height="200px" />
              <Skeleton height="200px" />
            </Stack>
          </div>
         <div>
         
          <CartList/>
         </div>
         <div>
          <TotalCart
           mainPriceSum = {mainPriceSum} 
          discountPriceSum = {discountPriceSum}
          />
         </div> 
			  </div>
        <div className = "otherCourses">
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

export default cartPage
