import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Spinner, Stack,Skeleton, SkeletonText} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const  categoryDetails = () => {
  return (
    <div className = "categoryFlex">
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
         <Link to = '/courses/course-selected/watch'>
            <button  style = {{cursor: 'pointer'}}>Access</button>
          </Link>
          <button style ={{cursor : 'pointer'}}>Add To Cart</button>
          <Link to = '/cart/checkout'>
            <button  style = {{cursor: 'pointer'}}>Buy Now</button>
          </Link>
        </div>
      </div>
      <div className = "preview">
        <Stack>
          {/* isLOaded will cancel out the effect when the content is loaded */}
          {/* <Skeleton height="200px" isLoaded>
          </Skeleton> */}
          <Skeleton height="200px" />
          </Stack>
        <div className = "iframe">
        <iframe title='courses-video' width="100%" height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0" >
        </iframe>
        </div>
        <div className = 'instruction'>
        <span >
        <FontAwesomeIcon icon = {faArrowUp}/>
        </span><br/>
          Tap to preview course 
        </div>
      </div>
    </div>
  )
}

export default categoryDetails
