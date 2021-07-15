import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const  categoryDetails = () => {
    return (
        <div>
              <div className = "category-heading">
					<span style = {{fontSize: '20px'}}>Category <FontAwesomeIcon icon = {faAngleRight}/></span>
					<span style = {{fontSize: '20px'}}>HTML <FontAwesomeIcon icon = {faAngleRight}/></span>
					<span style = {{fontSize: '20px'}}>09</span>
				</div>
				<div className = "details">
					<h4>Full details with share Link and play button</h4>
				</div>
				<div className =" ADD-BUY">
          <button style ={{cursor : 'pointer'}}>Add To Cart</button>
					<Link to = '/cart/checkout'>
          <button  style = {{cursor: 'pointer'}}>Buy Now</button>
          </Link>
				</div>
        </div>
    )
}

export default categoryDetails
