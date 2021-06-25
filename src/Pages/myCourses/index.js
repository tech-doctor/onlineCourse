import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar}  from '@fortawesome/free-solid-svg-icons'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import Subscribe from '../landingPage/subscribe'
import '../../Styles/myCourse.scss'


const  myCourses = ()  => {
	const Stars = () => {
		return(
			<span className = "rating-stars">
        <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			</span>
			)
	}

	const Box = function box(){
		return (
			<div className = "myCourse-box">
				<div  className = "image">
					<img alt ="" src = "../Assets/React-frontend.jpg"/>
				</div>
			  <div className ="details" style = {{textAlign: 'center'}}>
        <p style = {deepText}>Hereis the title for this course</p>
					<p>7th june 2020</p>
					<p><small><span style = {deepText} className = "rating-number">4.5</span><Stars/>
					<span className = "likes">(147,256)</span></small>
					</p>
					<p>
						<span style = {deepText} className = "newPrice">$15.99</span>
						<span style = {{textDecoration: "line-through"}} className = "oldPrice"> $87.99</span>
					</p>
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

const deepText = {
	fontWeight : "700"
}


export default myCourses
