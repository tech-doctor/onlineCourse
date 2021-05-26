import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/cart.scss'

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
                <span>Remove</span>
              </div>
              <div className = "price-tag">
                <span>normal price</span>
                <p>Discount</p>
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
			<div className = "body">
				<div className = "cartList-Total">
					<CartList/>
          <CartList/>
					<div className = "total">
						<p>Total</p>
           
					</div>
			  </div>
        <div className = "otherCourses">

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
