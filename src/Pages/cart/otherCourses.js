import React from 'react'


const  otherCourses = () => {

  const Box = function courseBox () {
    return (
       <div className = "box">
         <div className = 'image'>
        <img alt ="" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"></img>
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
		<div className = "otherCourses">
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

export default otherCourses
