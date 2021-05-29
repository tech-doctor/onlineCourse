import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/cart.scss'
import TotalCart from './totalCart'
import OtherCourses from './otherCourses'

const  cartPage = ()  => {

  const CartList = function cartList() {
    return (
      <div  className = "cartList">
						{/* <p>Cart List(Pictures, title,price-tag with remove and buy button)</p> */}
						<div className = "left">
              <div className ="image">
                <img  alt = "" src = "../Assets/React-frontend.jpg"/>
              </div>
              <div className = 'title-details'>
                <p>TITLE</p>
                <p>Little details</p>
              </div>
            </div>
            <div className ="right">
              <div  className = "remove">
                <span>X</span>
              </div>
              <div className = "price-tag">
              <p>$9.88</p>
              <p style = {{textDecoration: 'line-through'}}>$19.88</p><br/>
                <button>BUY</button>
              </div>
            </div> 
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
         <div>
          <CartList/>
          <CartList/>
         </div>
         <div>
          <TotalCart/>
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
