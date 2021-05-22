import React from 'react'
import  Header from "../../Component/Header/desktopHeader/Header"
//import Footer from "../../Component/Footer/footer"

const  checkOut = ()  => {
	return (
		<div className = "checkOutPage">
			<div>
        <Header/>
			</div>
			<hr/>
			<div className ="center-div">
				<div className = "title">
					<p>checkout</p>
				</div>
				<div className = "body">
					<div className = "payStack-page">
							<p>PayStack</p>
					</div>
					<div className = "OrderDetails-Summary">
							<p>Order Details</p>
					</div>
				</div>  
			</div>
			{/* <div>
        <Footer/>
			</div> */}
		</div>
	)
}

export default checkOut
