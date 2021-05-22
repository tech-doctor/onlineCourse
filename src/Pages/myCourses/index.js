import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'

const  myCourses = ()  => {
	return (
		<div>
			<div>
				<Header/>
			</div>
			<hr/>
			<div className = "center-div">
        <div className = "title">
					<h3>MY COURSES</h3>
				</div>
				<div className = "body">
					<div className = "myCourse">
					  <div className = "image">
						  <img alt ="" src = ""/>
						</div>
						<div className ="details">
                <p>Title</p>
								<p>Time Purchased</p>
								<p>Little details</p>
								<p>Rating</p>
						</div>
						
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

export default myCourses
