import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Spinner} from "@chakra-ui/react"

const  otherCourses = () => {
  
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

  const Box = function courseBox () {
    return (
       <div className = "box">
         <Link style = {{textDecoration: 'none', color: 'black'}}  to = 'courses/course-selected'>
         <div className = 'image'>
        <img alt ="" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"></img>
      </div>
			<div className = "course-box-details">
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
		<div className = "otherCourses">
      <div style = {{textAlign: 'center'}} >
            <Spinner  size="xl"/>
            
          </div>
		<div className = "div-title">
			<p style = {{textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>Other Courses you might interest you</p>
		</div>
		<div className = "body">
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

export default otherCourses
