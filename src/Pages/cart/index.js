import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'

const  cartPage = ()  => {
	return (
		<div>
		<div>
      <Header/>
		</div>
		<hr/>
		<div className = "center-div">
		  <div className = "title">
			  <h2>Shopping Cart</h2>
      </div>
			<div className = "body">
			   <div className = "cartList-Total">
           <div className = "cartList">
             <p>Cart List(Pictures, title,price-tag with remove and buy button)</p>
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
