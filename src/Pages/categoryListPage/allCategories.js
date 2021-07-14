import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AllCategories = () => {

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

   const AllCategory = function allCategories() {
     return (
      <Link style = {{textDecoration: 'none', color: 'black'}}  to = "course-selected">
     <div style = {{marginBottom: '20px'}} className = "allCoursesDisplay" >
        <div className = "left">
          <div className = "image"> 
            <img  alt = "" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"/>
          </div>
          <div className = "about">
            <p style = {deepText}>Here is the title for this course</p>
            <p><small><span style = {deepText} className = "rating-number">4.5</span><Stars/>
            <p>11:47secs</p>
            <span className = "likes">(147,256)</span></small>
            </p>
          </div>
        </div>
        <div className = "right">
          <div className = "price-tag">
            <p>	<span style = {deepText} className = "newPrice">$15.99</span></p>
          </div>
        </div>    
      </div>
      </Link> 
     )
   }

    return (
      <div className = "allCategory">
        <div style = {{display: 'flex', justifyContent: 'space-between',
        alignItems:'center' }} className = "title-filter">
          <div className ="title">
            <p style = {{ fontSize: '25px'}}>All JS Courses</p>
          </div>
            <div style = {{}} className ="filter">
              <select style = {{cursor: 'pointer' }}>
                <option>Filter</option>
                <option>Latest</option>
                <option>Most Rated</option>
              </select>
            </div>  	 
        </div>
        <div>
          <AllCategory/>
          <AllCategory/>
          <AllCategory/>
          <AllCategory/>
          <AllCategory/>
          <AllCategory/>  
        </div>
        <div style = {{cursor: 'pointer'}} className = "more">
         <p>See more</p>
        </div>
        
      </div>
    )
}

const deepText = {
  fontWeight: '700'
}

export default AllCategories
