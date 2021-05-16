import React from 'react'

const FeaturedCourses = () => {


	const Box = function box(){
		return (
		<div className = "course-box">
				<div className = 'image'>
          <img alt ="" src = "Assets/React-frontend.jpg"></img>
				</div>
				<div className = "course-box-details">
           <p>Title</p>
					 <p>Time</p>
					 <p>Rating</p>
					 <p>Price-tag</p>
				</div>
			</div>
		)
	}

	return (
		<div className = "featuredCourses">
		  <div>
				<p style = {{textAlign: 'center', fontSize: '30px'}}>Featured Courses</p>
			</div>
			<div className = 'course-box-list'>
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

export default FeaturedCourses
