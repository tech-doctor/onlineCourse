import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar, faAngleRight,  faAngleLeft}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const FeaturedCourses = () => {
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

	const featuredCourses = [
		{
    id : 1,
		thumbNail: '',
		Title: 'Here is the title of this course',
		Duration: '11.47secs',
		Rating: {
      rate: 4.5,
			likes:  147256,
			stars: <Stars/>,
		},
		Price : {
		  oldPrice : 87.99,
		  newPrice : 15.99
		}
	}, 

	{
    id: 2,
		thumbNail: '',
		Title: 'That is the title of this course',
		Duration: '12.47secs',
		Rating: {
      rate: 4.0,
			likes:  148256,
			stars: <Stars/>,
		},
		Price : {
		  oldPrice : 80.99,
		  newPrice : 18.99
		}
	}

]


  
	const Box = function box(){
		return (
      <div className = "course-box">	
				{
				featuredCourses.map ((data,  index) => 	
        //{ const {thumbNail, Title,Duration} = data;
	     	// const {likes,stars} = data.Rating
		    // const {oldPrice, newPrice} = data.Price;
			   (<Link key = {index} to = "courses/course-selected" style = {{textDecoration: 'none', color: 'black'}} >
						
            <div  className = 'image'>
							<img alt ="" src = "Assets/React-frontend.jpg"></img>
						</div>
						<div className = "course-box-details">
							<p style = {deepText}>{data.Title}</p>
							<p>{data.Duration}</p>
							<p><small><span style = {deepText} className = "rating-number">{data.Rating.rate}</span><Stars/>
							<span className = "likes">{data.Rating.likes}</span></small>
							</p>
							<p>
								<span style = {deepText} className = "newPrice">{data.Price.newPrice} </span>
								<span style = {{textDecoration: "line-through"}} className = "oldPrice"> {data.Price.oldPrice}</span>
							</p>
						</div>
            </Link>) 
					 )
				} 
			</div>			
		)
	}

  const slideRight = () => {
    console.log('right')
  }

  const slideLeft = () => {
    console.log('left')
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
      <FontAwesomeIcon
      className = 'slideIcon slideIconLeft'  
      icon={faAngleLeft}
      onClick = {slideLeft}
      />

      <FontAwesomeIcon
       className = 'slideIcon slideIconRight' 
        icon={faAngleRight}
        onClick = {slideRight}
      />
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}

export default FeaturedCourses
