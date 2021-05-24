import React from 'react'

const  SameCategory = () => {

    const Box = function box(){
		return (
		<div className = "course-box">
      <div className = 'image'>
        <img alt ="" src = "../Assets/React-frontend.jpg"></img>
      </div>
      <div className = "box-details">
        <p>Title No</p>
        <p>Time</p>
        <p>Rating</p>
        <p>Price-tag</p>
      </div>
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

export default SameCategory
