import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar}  from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const  SameCategory = () => {

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
		<div className = "course-box">
      <Link to = "course-selected">
      <div className = 'image'>
        <img alt ="" src = "../Assets/React-frontend.jpg"></img>
      </div>
      <div className = "box-details">
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
      </Link>
		</div>
		)
	}


    return (
        <div className = "sameCategoryCourses-div">
          <div className = 'heading'>
             <p style = {{textAlign: 'center',fontSize: '25px'}}>OTHER HTML COURSES</p>
          </div>
          <div className = "sameCategoryCourses">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>  
          </div>
					
				</div>
    )
}

const deepText = {
	fontWeight : "700"
}

export default SameCategory
