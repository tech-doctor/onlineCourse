import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/cart.scss'

const  cartPage = ()  => {
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
					<div  className = "cartList">
						{/* <p>Cart List(Pictures, title,price-tag with remove and buy button)</p> */}
						<div className ="image">
							<img  alt = "" src = "../Assets/React-frontend.jpg"/>
						</div>
						<div className = 'title-author'>
							<p>TITLE</p>
						</div>
					</div>
					<div className = "Total">
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
