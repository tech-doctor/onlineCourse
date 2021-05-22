import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import FeaturedCourses from '../landingPage/featuredCourses'

const  courseSelected = ()  => {
	return (
		<div className = "courseSelected">
      <div>
				<Header/>
			</div>
			<hr/>
			<div className = "center-div">
			  <div className = "category-heading">
					<span style = {{fontSize: '20px'}}>Category <FontAwesomeIcon icon = {faAngleRight}/></span>
					<span style = {{fontSize: '20px'}}>HTML <FontAwesomeIcon icon = {faAngleRight}/></span>
					<span style = {{fontSize: '20px'}}>09</span>
				</div>
				<div className = "details">
					<h4>Full details with share Link and play button</h4>
				</div>
				<div className =" ADD-BUY">
          <button>Add To Cart</button>
					<button>Buy Now</button>
				</div>
				<hr/>
				<div className = "sameCategoryCourses">
					<p>Other courses of the same category in  box</p>
				</div>
				<hr/>
				<div className = "review-div">
				  <div className ="review-heading">
						<div className = "search-review">
							<input type = "search" placeholder = "search-reviews"></input>
						</div>
						<div className = "filter-review">
								<select>
									<option>MOST RECENT</option>
									<option>Highest-Rated</option>
								</select>
						</div>
					</div>
					<div className = "review-body">
             <p>REVIEW-BODY(with avatar, ratings, names and time)</p>
					</div>  
				</div>
				<hr/>
				<div className ="otherCourses">
          <FeaturedCourses/>
				</div>
				<hr/>
			</div>
			<div>
				<Footer/>
			</div>	
		</div>
	)
}

export default courseSelected
