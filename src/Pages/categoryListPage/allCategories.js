import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleDown}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {Badge} from "@chakra-ui/react"
import moment from 'moment';

const AllCategories = (props) => {

const { loading, topCourses} = props;


  return (
    <div className = "allCategory">
      <div style = {{display: 'flex', justifyContent: 'space-between',
      alignItems:'center' }} className = "title-filter">
        <div className ="title">
          <p style = {{ fontSize: '25px'}}>All JS Courses</p>
        </div>
          <div className ="filter">
            <select style = {{cursor: 'pointer' }}>
              <option>Filter</option>
              <option>Latest</option>
              <option>Most Rated</option>
            </select>
          </div>  	 
      </div>
      {topCourses.map(data =>  
      <div key = {data.id} className='all-categories-box'>
      <Link style = {{textDecoration: 'none', color: 'black'}}  to = "course-selected">
        <div style = {{marginBottom: '20px'}} className = "allCoursesDisplay" >
            <div className = "left">
              <div className = "image"> 
                <img  alt = {data.snippet.title} src ={data.snippet.thumbnails.standard.url}/>
              </div>
              <div className = "about">
                <p style = {deepText}>{data.snippet.title}</p>
                <div>
                  <p>{moment(data.snippet.publishedAt).fromNow()}</p>
                {new Date(data.snippet.publishedAt).getDate() + '0' > 200? 
                <Badge variant="solid" colorScheme="green" px={2}>
                Best Selling
               </Badge>: ''
              }
              
                </div>
              </div>
            </div>
            <div className = "right">
              <div className = "price-tag">
                <p>	<span style = {deepText} className = "newPrice">₦{new Date(data.snippet.publishedAt).getDate() + '0'}</span></p>
              </div>
            </div>    
          </div>
      </Link>   
      </div> 
      )}
      <div style = {{cursor: 'pointer'}} className = "more">
        <p>See more <FontAwesomeIcon icon={faAngleDown}/></p>
      </div>
    </div>
  )
}

const deepText = {
  fontWeight: '700'
}

export default AllCategories
