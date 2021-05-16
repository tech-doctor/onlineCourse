import React from 'react'

const aboutInstructor = () => {
	return (
		<div className = "instructor-div">
			<div className = "title">
				<p style = {{textAlign: 'center', fontSize : '25px'}}>About the instructor</p>
			</div>
			<div className = "about-instructor">
				{/* <div className = "instructor-image"> */}
					<img alt = "" src = "Assets/instructor.jpg"></img>
				{/* </div> */}
				<div className = "instructor-details">
					<p>About instructor</p>
					<button>Contact</button>
				</div>
			</div>
		</div>
	)
}

export default aboutInstructor
