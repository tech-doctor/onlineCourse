import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'


const  purchaseHistory = ()  => {
	return (
		<div>
			<div>
        <Header/>
			</div>
			<hr/>
			<div className = "center-div">
				<div className = "title">
          <h3>Purchase History</h3>
				</div>
				<div className ="body">

				</div>
			</div>
			<hr/>
			<div>
				<Footer/>
			</div>
		</div>
	)
}

export default purchaseHistory
