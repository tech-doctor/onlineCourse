import React, { useState } from 'react'
import { Badge} from "@chakra-ui/react"
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateCartList } from '../Store/databaseSlice'


const CourseCard = (props) => { 
  const [showCartButton, setShowCartButton] = useState(false)
  const { data,  id, imageAlt, imageSrc, title, date, newPrice, oldPrice} = props
 // const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList)
  const dispatch = useDispatch()


  const handleClick = () => {
    dispatch(updateCartList(data))
    //console.log(data.id)
    console.log(data.snippet.title)
  }

	return (
		<div className= "card-item" onMouseEnter={() => setShowCartButton(true)}onMouseLeave={() => setShowCartButton(false)}> 
      <Link to = {`/courses/${id}`} className='link' style = {{textDecoration: 'none', color: 'black'}}>
        {showCartButton && (
          <div className='overlay'></div>
        )}		 
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
              <Badge className='best-selling' variant="solid" colorScheme="green" px={2}>
              Best Selling
            </Badge>: ''} 
            </div>
          </div>
        </div>	
      </Link>
      	{showCartButton && (
					<div className='button'>
						<button onClick={handleClick}>Add To Cart</button>
				</div> )}
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}

export default CourseCard
