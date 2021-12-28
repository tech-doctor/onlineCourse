import React, { useState } from 'react'
import { Badge} from "@chakra-ui/react"
import { Link} from 'react-router-dom'


const CourseCard = (props) => { 
  const [showCartButton, setShowCartButton] = useState(false)
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

export default CourseCard



// {/* <div className = 'course-box-list'>
// 			  <div className = "course-box" onMouseEnter={() => setShowCartButton(true)}onMouseLeave={() => setShowCartButton(false)}>
// 				<Slider {...settings}>
// 					{featuredCourses.map ((data,  index) => 	
// 			    (<Link key = {data.id} to = "courses/course-selected" className='link' style = {{textDecoration: 'none', color: 'black'}} >
// 						{/* {showCartButton && (
//              <div className='overlay'></div>
//              )}		  */}
// 						<div className='course-card'>
// 							<div  className = 'image'>
// 								<img alt ={data.snippet.title}  src = {data.snippet.thumbnails.standard.url}></img>
// 							</div>
// 							<div className = "course-box-details">
// 								<p style = {deepText}>{data.snippet.title}</p>
// 								<p>{moment(data.snippet.publishedAt).fromNow()}</p>
// 								<p>
// 									<span style = {deepText} className = "newPrice">₦{new Date(data.snippet.publishedAt).getDate() + '0'} </span>
// 									<span style = {{textDecoration: "line-through"}} className = "oldPrice">₦{Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}</span>
// 								</p>
// 								<p>BestSelling</p>
// 							</div>
// 						</div>			
//           </Link>))}
// 					</Slider>
// 				</div>
				
//           {/* {showCartButton && (
// 					<div className='button'>
// 						<button>Add To Cart</button>
// 					</div> )}  */}  
// 			</div> */}

