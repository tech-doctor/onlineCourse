import React from 'react'
import {Badge} from "@chakra-ui/react"
import { Link} from 'react-router-dom'



const TopCoursesCard = (props) => { 
  const { id, imageAlt, imageSrc, title, date, newPrice, oldPrice} = props
  
	return (
		<div className= "card-item">
      <Link to = {`courses/course-selected/:${id}`} className='link' style = {{textDecoration: 'none', color: 'black'}}>
      <div className='card-inner'>
        <div className='card-top'>
          <img alt ={imageAlt}  src = {imageSrc}/>
        </div>
        <div className='card-bottom'>
          <div style={{marginTop: '5px',}} className='card-info'>
            <span style = {deepText}>{title}</span><br/>
            <span >{date}</span>
            <p>
            <span style = {deepText}>₦{newPrice} </span>
            <span style = {{textDecoration: "line-through"}}>₦{oldPrice}</span>
            </p>
            {newPrice > 160 ? 
            <Badge variant="solid" colorScheme="green" px={2}>
            Best Selling
           </Badge>: ''} 
          </div>
        </div>
      </div>	
      </Link>
      	
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}

export default TopCoursesCard


