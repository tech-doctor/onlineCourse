import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import Subscribe from '../landingPage/subscribe'
import '../../Styles/myCourse.scss'


const  myCourses = ()  => {

	const Box = function box(){
		return (
			<div className = "myCourse-box">
				<div  className = "image">
					<img alt ="" src = "../Assets/React-frontend.jpg"/>
				</div>
			  <div className ="details" style = {{textAlign: 'center'}}>
					<p>Title</p>
					<p>Time Purchased</p>
					<p>Little details</p>
					<p>Rating</p>
			  </div>	
		  </div>
		)
	}

	return (
		<div className  = "myCourse">
			<div>
				<Header/>
			</div>
			<hr/>
			<div className = "center-div">
        <div className = "title">
					<h2 style = {{color: 'white'}}>MY COURSES</h2>
				</div>
				<hr/>
				<div className = "body">
					<Box/>
					<Box/>
					<Box/>
					<Box/>
				</div>
			</div>
			<hr/>
			<div>
				<Subscribe/>
			</div>
			<hr/>
			<div>
        <Footer/>
			</div>
		</div>
	)
}

export default myCourses
